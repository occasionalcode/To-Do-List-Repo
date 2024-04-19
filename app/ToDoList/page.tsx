import Link from "next/link";
import { todo } from "node:test";
import { Trash2, CircleCheck } from "lucide-react";
import { useState } from "react";
import { Undo2 } from "lucide-react";

type propsTodoList = {
  Todo: any[];
  title: string;
  status: string;
};

const TodoList = ({ Todo, title, status }: propsTodoList) => {
  const filteredTodos = Todo.filter((todo) => todo.status == status);
  const totalNumber = Todo.filter((todo) => todo.status === status).length;

  const handleDelete = (todoId: any) => {
    fetch("http://localhost:8000/Todo/" + todoId, {
      method: "DELETE",
    })
      .then(() => console.log(todoId))
      .then(() => {
        window.location.reload();
      });
  };

  const handleFinished = (todoId: any) => {
    fetch("http://localhost:8000/Todo/" + todoId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "2" }),
    }).then(() => {
      console.log(JSON.stringify({ status: "2" }));
      window.location.reload();
    });
  };
  const handleUnFinished = (todoId: any) => {
    fetch("http://localhost:8000/Todo/" + todoId, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "1" }),
    }).then(() => {
      console.log(JSON.stringify({ status: "1" }));
      window.location.reload();
    });
  };

  return (
    <div className="my-8 font-Montserrat">
      {status == "1" && totalNumber == 0 && (
        <div className="h-96 flex flex-col justify-center items-center">
          <h2 className="font-medium text-lg my-5 text-center text-gray-600">
            <span className="text-4xl text-red-900">START</span> <br /> Making
            Tasks
          </h2>

          <div className="bg-red-400 w-32 h-10 items-center flex justify-center rounded-full text-white shadow-lg">
            <Link href={"/create"}>Create Task!</Link>
          </div>
        </div>
      )}
      {totalNumber > 0 && status == "1" && (
        <h2 className="font-medium text-sm my-5">
          You have {totalNumber}
          <span className="font-bold text-2xl text-red-900"> PENDING </span>
          task(s)
        </h2>
      )}
      {status == "2" && totalNumber == 0 && (
        <div className="h-96 flex flex-col justify-center items-center">
          <h2 className="font-medium text-lg my-5 text-center text-gray-600">
            <span className="text-4xl text-green-900">STOP</span> <br />{" "}
            Procrastinating
          </h2>
        </div>
      )}
      {totalNumber > 0 && status == "2" && (
        <h2 className="font-medium my-5 ">
          <span className=" text-2xl text-green-900">Congratulations</span>
          <br />
          you have finished {totalNumber} task(s)!!!
        </h2>
      )}

      {filteredTodos.map((todo) => (
        <div
          className="flex flex-col my-3 h-20 justify-center items-center bg-white rounded-md shadow-[2px_2px_3px_1px_rgba(0,0,0,0.3)]"
          key={todo.id}
        >
          <div className="flex flex-row w-80 font-semibold justify-between">
            <div className="w-56 ">
              <h2>{todo.title}</h2>
            </div>
            <div className="flex flex-row justify-between w-16">
              {status == "1" && (
                <Link href={"/"}>
                  <CircleCheck
                    className="text-green-600"
                    onClick={() => {
                      handleFinished(todo.id);
                    }}
                  />
                </Link>
              )}
              {status == "2" && (
                <Link href={"/"}>
                  <Undo2
                    className="text-blue-600"
                    onClick={() => {
                      handleUnFinished(todo.id);
                    }}
                  />
                </Link>
              )}
              <button>
                <Trash2
                  className="text-red-600"
                  onClick={() => {
                    handleDelete(todo.id);
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

import Link from "next/link";
import { todo } from "node:test";
import { Trash2, CircleCheck } from "lucide-react";
import { useState } from "react";

type propsTodoList = {
  Todo: any[];
  title: string;
  status: string;
};

const TodoList = ({ Todo, title, status }: propsTodoList) => {
  const filteredTodos = Todo.filter((todo) => todo.status == status);
  return (
    <div className="my-8">
      <h2 className="font-bold text-2xl my-5">{title}</h2>
      {filteredTodos.map((todo) => (
        <div
          className="flex flex-col my-3 h-20 justify-center items-center bg-blue-200 rounded-xl"
          key={todo.id}
        >
          <div className="flex flex-row w-80 justify-between">
            <h2>{todo.title}</h2>
            <div className="flex flex-row justify-between w-16">
              {status == "1" && (
                <button>
                  <CircleCheck />
                </button>
              )}
              <button>
                <Trash2 />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

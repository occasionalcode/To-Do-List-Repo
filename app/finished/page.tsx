import Link from "next/link";
import { todo } from "node:test";
import { Trash2, CircleCheck } from "lucide-react";
import { useState } from "react";

type propsFinished = {
  Todo: any[];
  title: string;
};

const Finished = ({ Todo, title }: propsFinished) => {
  const filteredTodos = Todo.filter((todo) => todo.status == "2");
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

export default Finished;

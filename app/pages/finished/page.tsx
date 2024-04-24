"use client";
import TodoList from "../../component/TodoList";
import React from "react";
import useFetch from "../../useFetch";
import { Ellipsis } from "lucide-react";

const Finished = () => {
  const {
    data: todo,
    isPending,
    error,
  } = useFetch({ url: "http://localhost:8000/Todo" });

  return (
    <div className="flex  justify-center items-center ">
      <div className="w-96 min-h-96 max-h-[36rem] overflow-x-hidden overflow-y-scroll px-4 bg-TodoGreen rounded-3xl rounded-tl-none rounded-tr-none shadow-[2px_2px_3px_0px_rgba(0,0,0,0.3)]">
        {error && <div>{error}</div>}
        {isPending && (
          <div className="flex justify-center items-center w-96 h-96 font-semibold text-white ">
            <div>
              <Ellipsis />
            </div>
          </div>
        )}
        {todo && <TodoList Todo={todo} status="2" />}
      </div>
    </div>
  );
};

export default Finished;

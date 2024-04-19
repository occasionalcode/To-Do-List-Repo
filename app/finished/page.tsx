"use client";
import TodoList from "../ToDoList/page";
import React from "react";
import useFetch from "../useFetch";

const Finished = () => {
  const {
    data: todo,
    isPending,
    error,
  } = useFetch({ url: "http://localhost:8000/Todo" });
  return (
    <div className="flex  justify-center items-center">
      <div className="w-96">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {todo && <TodoList Todo={todo} title="To Do lists!!!" status="2" />}
      </div>
    </div>
  );
};

export default Finished;

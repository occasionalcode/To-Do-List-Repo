"use client";

import React, { useEffect, useState } from "react";

import TodoList from "./ToDoList/page";
import useFetch from "./useFetch";

const Main = () => {
  const {
    data: todo,
    isPending,
    error,
  } = useFetch({ url: "http://localhost:8000/Todo" });

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-96">
        {error && <div>{error}</div>}
        {isPending && <div>Loading...</div>}
        {todo && <TodoList Todo={todo} title="To Do lists!!!" />}
      </div>
    </div>
  );
};

export default Main;

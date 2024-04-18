"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("1");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const todo = { title, status };

    fetch("http://localhost:8000/Todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new Blog added");
    });
  };

  return (
    <div className="flex flex-col  mx-10">
      <h1 className="text-4xl font-bold mt-10">Create new task!</h1>
      <form
        onSubmit={handleSubmit}
        className="flex  flex-col items-center h-72 justify-between"
      >
        <div className="flex flex-col items-center mt-10">
          <label className="text-3xl ">Blog Title:</label>
          <input
            className="text-center"
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center">
          <label className="text-3xl">Status</label>
          <select
            value={status}
            onChange={(e: any) => setStatus(e.target.value)}
          >
            <option value="1">To-Do</option>
            <option value="2">Finished</option>
          </select>
        </div>
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default CreateTask;

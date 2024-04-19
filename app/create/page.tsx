"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("1");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const todo = { title, status };

    setIsPending(true);
    fetch("http://localhost:8000/Todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
      if (status == "2") {
        window.location.href = "/finished";
      } else {
        window.location.href = "/";
      }
    });
  };

  return (
    <div className="flex flex-col justify-center items-center font-Montserrat text-white ">
      <div className="flex flex-col  w-96 justify-center bg-TodoBlue pb-7 rounded-3xl rounded-tr-none rounded-tl-none shadow-[2px_2px_3px_0px_rgba(0,0,0,0.3)]">
        <h1 className=" font-light mt-10 ml-3 text-center">
          <span className=" text-4xl font-medium text-blue-50 ">Create </span>{" "}
          new task!
        </h1>
        <div className="flex  flex-col items-center h-72 justify-between">
          <form onSubmit={handleSubmit} className="">
            <div className="flex flex-col items-center mt-6 mb-5 ">
              <label className="text-xl mb-3 ">Task</label>
              <input
                className="text-center text-black h-10 w-72 px-3 rounded-md overflow-x-scroll"
                type="text"
                required
                placeholder="What is your task?"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-xl mb-3 ">Status</label>
              <select
                className="h-10 w-72 text-black text-center rounded-md"
                value={status}
                onChange={(e: any) => setStatus(e.target.value)}
              >
                <option value="1">To-Do</option>
                <option value="2">Finished</option>
              </select>
            </div>
            <div className="flex justify-center mt-7">
              {!isPending && (
                <button className="bg-white w-32 h-10 text-black font rounded-full shadow-lg">
                  Add Blog
                </button>
              )}
              {isPending && (
                <button className="bg-white w-32 h-10 text-black font rounded-full shadow-lg">
                  Adding Blog...
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;

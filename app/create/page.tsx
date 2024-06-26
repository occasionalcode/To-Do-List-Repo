"use client";

import React, { useState } from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/navigation";

import { ChevronDown, ChevronUp } from "lucide-react";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("1");
  const [isPending, setIsPending] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const list = ["To-Do", "Finished"];
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const todo = { title, status };
    setIsOpen(false);

    setIsPending(true);
    fetch("http://localhost:8000/Todo", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(todo),
    }).then(() => {
      console.log("new Blog added");
      setIsPending(false);
      if (status == "2") {
        // window.location.href = "/finished";
        router.push("/finished");
        useRouter;
      } else {
        // window.location.href = "/";
        router.push("/");
      }
    });
  };

  const handleSelectStatus = (selectedStatus: string) => {
    setStatus(selectedStatus); // Update the status state when an item is clicked
    setIsOpen(false); // Close the dropdown after selecting an item
  };

  return (
    <div className="flex flex-col justify-center items-center font-Montserrat text-white ">
      <div className="flex flex-col  w-96 justify-center bg-TodoBlue pb-7 rounded-3xl rounded-tr-none rounded-tl-none shadow-[2px_2px_3px_0px_rgba(0,0,0,0.3)]">
        <p className=" font-light mt-10 ml-3 text-center">
          <span className=" text-4xl font-medium text-blue-50 ">Create </span> a
          new task!
        </p>
        <div className="flex  flex-col items-center  justify-between">
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
              <label className="text-xl mb-3">Status</label>
              {/* <select
                className="h-10 w-72 text-black text-center rounded-md"
                value={status}
                onChange={(e: any) => setStatus(e.target.value)}
              >
                <option value="1">To-Do</option>
                <option value="2">Finished</option>
              </select> */}
              {/* <div>
                <button
                  className="flex flex-row"
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  <p>todo</p>
                  <div>{!isOpen ? <ChevronDown /> : <ChevronUp />}</div>
                </button>
                {isOpen && (
                  <div>
                    {list.map((item, i) => (
                      <div key={i}>{item}</div>
                    ))}
                  </div>
                )}
              </div> */}
              <div className="flex flex-col items-center text-black">
                <div className="flex flex-col justify-center items-center">
                  <button
                    type="button"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    <div className="flex flex-row justify-between px-5 items-center  text-black hover:bg-gray-100  bg-white w-32 h-8  rounded-md ">
                      <p>{status === "1" ? "To-Do" : "Finished"}</p>
                      <div>{!isOpen ? <ChevronDown /> : <ChevronUp />}</div>
                    </div>
                  </button>
                  {isOpen && (
                    <div className=" flex justify-center flex-col bg-white w-32 border border-gray-300 rounded-md rounded-tl-none rounded-tr-none shadow-md">
                      {list.map((item, index) => (
                        <li className="list-none" key={index}>
                          <ul
                            className="cursor-pointer py-2 px-4 hover:bg-gray-100"
                            onClick={() =>
                              handleSelectStatus(index === 0 ? "1" : "2")
                            }
                          >
                            {item}
                          </ul>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-7">
              {!isPending && (
                <button
                  type="submit"
                  className="bg-white hover:bg-gray-100 w-32 h-10 text-black font rounded-full shadow-lg"
                >
                  Add Task
                </button>
              )}
              {isPending && (
                <button className="bg-white w-32 h-10 text-black font rounded-full shadow-lg">
                  Adding Task...
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

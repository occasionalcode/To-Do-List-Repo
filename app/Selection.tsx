import React from "react";
import Link from "next/link";
import CreateTask from "./create/page";

const Selection = () => {
  return (
    <div className="flex justify-center  mt-10 font-Montserrat text-md font-semibold">
      <div className="flex  w-96 h-14 justify-between items-end ">
        <div className="flex items-center justify-center h-14 w-32 pt-1 text-center bg-TodoRed rounded-tl-lg rounded-tr-lg ">
          <Link href="/">To do</Link>
        </div>
        <div className="flex items-center justify-center w-32 h-14 pt-1 text-center bg-TodoGreen rounded-tl-lg rounded-tr-lg">
          <Link href="/finished">Finished</Link>
        </div>
        <div className="flex items-center justify-center w-32 h-14  pt-1 text-white  text-center bg-TodoBlue rounded-tl-lg rounded-tr-lg">
          <Link href="/create">Create Task</Link>
        </div>
      </div>
    </div>
  );
};

export default Selection;

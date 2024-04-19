import React from "react";
import Link from "next/link";
import CreateTask from "./create/page";

const Selection = () => {
  return (
    <div className="flex justify-center mt-16  ">
      <div className="flex  w-80 justify-between">
        <Link href="/">To do</Link>
        <Link href="/finished">Finished</Link>
        <Link href="/create" className="bg-red-300 w-32 text-center">
          Create Task
        </Link>
      </div>
    </div>
  );
};

export default Selection;

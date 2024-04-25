import React from "react";
import Link from "next/link";
import CreateTask from "./create/page";
import { useRouter } from "next/navigation";

const Selection = () => {
  return (
    <div className="flex justify-center  mt-10 font-Montserrat text-md font-semibold">
      <div className="flex  w-96 h-14 justify-between items-end ">
        <Link href="/">
          <div className="flex items-center justify-center h-14 w-32 pt-1 text-center bg-TodoRed rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100 ">
            <h2>To do</h2>
          </div>
        </Link>
        <Link href="/finished">
          <div className="flex items-center justify-center w-32 h-14 pt-1 text-center bg-TodoGreen rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100">
            <h2>Finished</h2>
          </div>
        </Link>
        <Link href="/create">
          <div className="flex items-center justify-center w-32 h-14  pt-1 text-white  text-center bg-TodoBlue rounded-tl-lg rounded-tr-lg hover:h-20 transition-all duration-100">
            <h2>Create Task</h2>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Selection;

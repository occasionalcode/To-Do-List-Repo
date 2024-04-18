import Link from "next/link";
import { todo } from "node:test";

type propsTodoList = {
  Todo: any[];
  title: string;
};

const TodoList = ({ Todo, title }: propsTodoList) => {
  return (
    <div className="my-8">
      <h2 className="font-bold text-2xl my-5">{title}</h2>
      {Todo.map((todo) => (
        <div
          className="flex flex-col my-3 h-20 justify-center px-20 bg-blue-200"
          key={todo.id}
        >
          <div className="flex flex-row justify-between">
            <h2>{todo.title}</h2>
            <h2>Status: {todo.status}</h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;

"use client";

import { useAppDispatch } from "@/lib/hooks";
import { deleteTodo, editTodo } from "@/store/todo/operations";
import { Todo } from "@/types/types";

type Props = {
  todo: Todo;
};

export default function TodoTask({ todo }: Props) {
  const dispatch = useAppDispatch();

  const toggleHandler = () => {
    dispatch(editTodo(todo));
  };

  return (
    <div className="flex justify-between items-center border border-gray-300 p-3 rounded shadow-lg">
      <span
        className={`cursor-pointer ${
          todo.completed ? "line-through text-gray-400" : "text-gray-700"
        }`}
        onClick={toggleHandler}
      >
        {todo.title}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

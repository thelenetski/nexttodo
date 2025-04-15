"use client";

import { useAppDispatch } from "@/lib/hooks";
import { deleteTodo } from "@/store/todo/operations";
import { Todo } from "@/types/types";

type Props = {
  todo: Todo;
};

export default function TodoTask({ todo }: Props) {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-between items-center border border-gray-300 p-3 rounded shadow-lg">
      <span className="text-gray-700">{todo.title}</span>
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

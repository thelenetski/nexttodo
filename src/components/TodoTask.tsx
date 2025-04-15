"use client";

import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteTodo, editTodo } from "@/store/todo/operations";
import { selectLoadingTask } from "@/store/todo/selectors";
import { loadingStart } from "@/store/todo/todoSlice";
import { Todo } from "@/types/types";
import Loader from "./Loader/Loader";

type Props = {
  todo: Todo;
};

export default function TodoTask({ todo }: Props) {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(selectLoadingTask);

  const toggleHandler = () => {
    dispatch(editTodo(todo));
    dispatch(loadingStart(todo));
  };

  return (
    <div
      className={`flex justify-between items-center border border-gray-300 p-3 rounded shadow-lg ${
        todo.completed && "bg-green-200"
      }`}
    >
      {loading === todo.id ? (
        <div className="ml-6">
          <Loader />
        </div>
      ) : (
        <span
          className={`cursor-pointer ${
            todo.completed ? "line-through text-green-600" : "text-gray-700"
          }`}
          onClick={toggleHandler}
        >
          {todo.title}
        </span>
      )}
      <button
        onClick={() => dispatch(deleteTodo(todo.id))}
        className="text-red-500 hover:text-red-700 cursor-pointer"
      >
        Delete
      </button>
    </div>
  );
}

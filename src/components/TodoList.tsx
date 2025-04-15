"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteTodo, fetchTodos } from "@/store/todo/operations";

export default function TodoList() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul className="space-y-2">
          {items.map((todo) => (
            <li
              key={todo.id}
              className="flex justify-between items-center border p-2 rounded"
            >
              <span>{todo.title}</span>
              <button
                onClick={() => dispatch(deleteTodo(todo.id))}
                className="text-red-500 hover:text-red-700 cursor-pointer"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

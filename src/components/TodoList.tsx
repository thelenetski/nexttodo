"use client";

import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { fetchTodos } from "@/store/todo/operations";
import TodoTask from "./TodoTask";

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
            <li key={todo.id}>
              <TodoTask todo={todo} />
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

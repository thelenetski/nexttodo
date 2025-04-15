"use client";

import { useState } from "react";
import { useAppDispatch } from "../lib/hooks";
import { addTodo } from "@/store/todo/operations";

export default function AddTodo() {
  const [title, setTitle] = useState("");
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (title.trim()) {
      dispatch(addTodo(title));
      setTitle("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4 border rounded">
      <input
        className="flex-1 focus:outline-blue-500 p-2"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new todo"
      />
      <button className="bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-r cursor-pointer">
        Add
      </button>
    </form>
  );
}

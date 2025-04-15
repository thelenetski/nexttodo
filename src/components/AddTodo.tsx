"use client";

import { useForm } from "react-hook-form";
import { useAppDispatch } from "../lib/hooks";
import { addTodo } from "@/store/todo/operations";

type FormValues = {
  text: string;
};

export default function AddTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();
  const dispatch = useAppDispatch();

  const onSubmit = (data: FormValues) => {
    dispatch(addTodo(data.text.trim()));
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex mb-4 border border-gray-200 rounded shadow-lg"
    >
      <input
        className="flex-1 text-gray-700 focus:outline-gray-300 p-3"
        id="text"
        type="text"
        {...register("text", { required: "Task is required" })}
        placeholder="Add a new task"
      />
      {errors.text && <p style={{ color: "red" }}>{errors.text.message}</p>}
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-r cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

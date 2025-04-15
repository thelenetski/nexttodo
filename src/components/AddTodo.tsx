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
      className="flex justify-between mb-4 border border-gray-200 rounded shadow-lg"
    >
      <div className="w-full flex justify-between">
        <input
          className="w-full text-gray-700 focus:outline-none p-3"
          id="text"
          type="text"
          {...register("text", { required: "empty" })}
          placeholder="Add a new task"
        />
        {errors.text && (
          <p className="p-3" style={{ color: "red" }}>
            {errors.text.message}
          </p>
        )}
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-300 text-white px-4 py-2 rounded-r cursor-pointer"
      >
        Add
      </button>
    </form>
  );
}

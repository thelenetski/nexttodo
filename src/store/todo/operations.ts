import { Todo } from "@/types/types";
import axiosInstance from "@/utils/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchTodos = createAsyncThunk<Todo[]>(
  "todos/fetchTodos",
  async () => {
    const res = await axiosInstance.get<Todo[]>("/todos?_limit=10");
    return res.data;
  }
);

export const addTodo = createAsyncThunk<Todo, string>(
  "todos/addTodo",
  async (title) => {
    const res = await axiosInstance.post<Todo>("/todos", {
      title,
      completed: false,
    });
    return res.data;
  }
);

export const deleteTodo = createAsyncThunk<number, number>(
  "todos/deleteTodo",
  async (id) => {
    await axiosInstance.delete(`/todos/${id}`);
    return id;
  }
);

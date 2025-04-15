import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "@/types/types";
import { addTodo, deleteTodo, fetchTodos } from "./operations";

interface TodosState {
  items: Todo[];
  loading: boolean;
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  loading: false,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(addTodo.fulfilled, (state, action) => {
        state.items.unshift({
          ...action.payload,
          id: Math.floor(10000000 + Math.random() * 90000000),
        });
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const todosReducer = todosSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
import { Todo } from "@/types/types";
import { addTodo, deleteTodo, editTodo, fetchTodos } from "./operations";

interface TodosState {
  items: Todo[];
  loading: boolean;
  loadingTask: number | null;
  error: string | null;
}

const initialState: TodosState = {
  items: [],
  loading: false,
  loadingTask: null,
  error: null,
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    loadingStart(state, action) {
      state.loadingTask = action.payload.id;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.items.sort((a, b) => {
          if (a.completed === b.completed) return 0;
          return a.completed ? 1 : -1;
        });
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
      .addCase(editTodo.fulfilled, (state, action) => {
        state.loadingTask = null;
        const task = state.items.find((t) => t.id === action.payload.id);

        if (task) {
          task.completed = !task.completed;
        }

        state.items.sort((a, b) => {
          if (a.completed === b.completed) return 0;
          return a.completed ? 1 : -1;
        });
      })
      .addCase(editTodo.rejected, (state, action) => {
        state.loadingTask = null;
        state.error = action.error.message ?? "Something went wrong";
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.items = state.items.filter((todo) => todo.id !== action.payload);
      });
  },
});

export const { loadingStart } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

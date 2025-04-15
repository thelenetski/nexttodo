import { RootState } from "../store";

export const selectTasks = (state: RootState) => state.todos.items;

export const selectLoading = (state: RootState) => state.todos.loading;

export const selectLoadingTask = (state: RootState) => state.todos.loadingTask;

export const selectError = (state: RootState) => state.todos.error;

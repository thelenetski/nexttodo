import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Welcome in ToDo App</h1>
      <AddTodo />
      <TodoList />
    </main>
  );
}

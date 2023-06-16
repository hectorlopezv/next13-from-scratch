import Link from "next/link";
import AddTodo from "./components/AddTodo";
import Post from "./components/Post";
import TodoList from "./components/TodoList";
export const revalidate = 0;
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hello world</h1>
      <Link href="/about">Link to about page</Link>
      <Link href="/users">Link to users page</Link>
      <AddTodo />
      <TodoList />
      <Post />
    </main>
  );
}

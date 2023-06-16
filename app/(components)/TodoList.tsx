import fetchTodos from "@/lib/fetchTodos";
import Todo from "./Todo";

type Props = {};

export default async function TodoList({}: Props) {
  const todos = await fetchTodos();
  const sortedTodos = todos.reverse();

  const content = (
    <>
      {sortedTodos.map((todo) => (
        <Todo key={todo.id} {...todo} />
      ))}
    </>
  );
  return content;
}

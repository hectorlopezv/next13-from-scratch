import { NextResponse } from "next/server";

type Props = {
  params: {
    id: string;
  };
};
const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
export async function GET(request: Request, { params: { id } }: Props) {
  const response = await fetch(`${DATA_SOURCE_URL}/${id}`);
  const todo: Todo = await response.json();
  if (!todo.id) {
    return NextResponse.json({ error: "Todo not found" }, { status: 404 });
  }
  return NextResponse.json(todo);
}

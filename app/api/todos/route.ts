import { NextResponse } from "next/server";

const DATA_SOURCE_URL = "https://jsonplaceholder.typicode.com/todos";
const API_KEY = process.env.NEXT_PUBLIC_DATA_API_KEY as string;
export async function GET() {
  const response = await fetch(DATA_SOURCE_URL);
  const todos = await response.json();
  return NextResponse.json(todos);
}
export async function DELETE(request: Request) {
  const { id }: Partial<Todo> = await request.json();
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }
  await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
  });
  return NextResponse.json({ message: `Todo ${id} deleted` });
}

export async function POST(request: Request) {
  const { userId, title }: Partial<Todo> = await request.json();
  if (!userId || !title) {
    return NextResponse.json(
      { error: "Misssing required data" },
      { status: 400 }
    );
  }
  const res = await fetch(`${DATA_SOURCE_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });
  const newTodo: Todo = await res.json();
  return NextResponse.json(newTodo);
}

export async function PUT(request: Request) {
  const { userId, title, id, completed }: Todo = await request.json();
  if (!userId || !title || !id || typeof completed !== "boolean") {
    return NextResponse.json(
      { error: "Misssing required data" },
      { status: 400 }
    );
  }
  const res = await fetch(`${DATA_SOURCE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "API-Key": API_KEY,
    },
    body: JSON.stringify({ userId, title, completed: false }),
  });
  const updatedTodo: Todo = await res.json();
  return NextResponse.json(updatedTodo);
}

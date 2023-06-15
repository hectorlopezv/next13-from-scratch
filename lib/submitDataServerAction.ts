"use server";

import { redirect } from "next/navigation";

export async function submitDataForm(data: any) {
  // Send data to API route
  await fetch("http://localhost:3000/api/feedback", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.get("name"),
      email: data.get("email"),
      message: data.get("message"),
    }),
  });

  redirect("/thank-you");
}

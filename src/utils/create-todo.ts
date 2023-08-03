"use server";

import { redirect } from "next/navigation";

import { prisma } from "@/db";

export async function createTodo(data: FormData) {
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid title");
  }

  await prisma.todo.create({
    data: { title, complete: false },
  });

  redirect("/");
}

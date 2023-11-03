import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

// Get all tasks
export async function GET() {
  const tasks = await prisma.task.findMany();
  return NextResponse.json(tasks);
}

// Create a new task
export async function POST(request) {
  // Capture the request body
  const { title, description } = await request.json();

  const newTask = await prisma.task.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json({
    message: "Task created successfully",
    task: newTask,
  });
}

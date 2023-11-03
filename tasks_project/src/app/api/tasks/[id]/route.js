import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  let message = "Exsiste la tarea";
  const task = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  if (!task) {
    message = "No existe la tarea";
  }

  return NextResponse.json({ message, task });
}

export async function PUT(request, { params }) {
  const data = await request.json();

  const updatedTask = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json({ message: "Tarea Actualizada", updatedTask });
}

export async function DELETE(request, { params }) {
  let message = "Tarea eliminada";
  try {
    await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json({ message });
  } catch (error) {
    return NextResponse.json({ message: error.meta.cause });
  }
}

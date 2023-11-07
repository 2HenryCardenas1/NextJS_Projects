import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(params.id),
      },
    });

    if (!task) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(task);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();

    const updatedTask = await prisma.task.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });

    return NextResponse.json(updatedTask);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function DELETE(request, { params }) {
  try {
    const taskDelete = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });

    if (!taskDelete) {
      return NextResponse.json({ message: "Note not found" }, { status: 404 });
    }

    return NextResponse.json(taskDelete);
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2025") {
        return NextResponse.json(
          {
            message: "Note not found",
          },
          {
            status: 404,
          }
        );
      }

      return NextResponse.json(
        {
          message: error.meta.cause,
        },
        {
          status: 500,
        }
      );
    }
  }
}

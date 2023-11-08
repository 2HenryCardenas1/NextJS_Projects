"use client";

import { useRouter } from "next/navigation";

export default function TaskCard({ task }) {
  const router = useRouter();

  return (
    <div
      className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 hover:cursor-pointer flex flex-col gap-5 h-96"
      onClick={() => router.push(`/tasks/edit/${task.id}`)}
    >
      <div>
        <div className="text-right">
          <span className="text-sm text-gray-400 ">
            {task.completed ? "Completed" : "Pending"}
          </span>
          <span
            className={`inline-block ml-2 px-2 py-1 rounded-full ${
              task.completed ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>

        <h2 className="font-bold text-3xl text-center">{task.title}</h2>
        <p className="text-white break-words">{task.description}</p>
      </div>

      <div className="flex  justify-between flex-1 items-end">
        <p className="text-gray-400 align-bottom flex flex-col">
          <span className="text-sm">Created</span>
          {new Date(task.createdAt).toLocaleDateString()}
        </p>
        <p className="text-gray-400 align-bottom flex flex-col">
          <span className="text-sm">Updated</span>
          {new Date(task.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

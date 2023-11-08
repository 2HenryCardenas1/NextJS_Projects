"use client";

import { UpdateTask } from "@/api/task_req";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function TaskCard({ task }) {
  const router = useRouter();

  const lenghtDesc = task.description.length;

  const [status, setStatus] = useState(task.completed);

  const handleStatus = useCallback(async () => {
    await UpdateTask(task.id, {
      completed: !status,
    });
    setStatus(!status);
    router.refresh();
  }, [status, task, router]);

  return (
    <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700 hover:cursor-pointer flex flex-col gap-5 h-[30rem] ">
      <div className="text-right hover:cursor-pointer " onClick={handleStatus}>
        <span className="text-sm text-gray-400 ">
          {status ? "Completed" : "Pending"}
        </span>
        <span
          className={`inline-block ml-2 px-2 py-1 rounded-full ${
            status ? "bg-green-500" : "bg-red-500"
          }`}
        />
      </div>
      <div
        className="flex-1 flex flex-col "
        onClick={() => router.push(`/tasks/edit/${task.id}`)}
      >
        <h2 className="font-bold text-3xl text-center mb-2">{task.title}</h2>
        <div
          className={`overflow-auto max-h-[250px] flex flex-col  items-center flex-1 ${
            lenghtDesc < 250 && "justify-center"
          }`}
        >
          <p className="text-white break-words  ">{task.description}</p>
        </div>
      </div>

      <div className="flex  justify-between  items-end">
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

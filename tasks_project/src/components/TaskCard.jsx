"use client";

import { DeleteTask, UpdateTask } from "@/api/task_req";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

export default function TaskCard({ task }) {
  const router = useRouter();

  const lenghtDesc = task.description.length;

  const [status, setStatus] = useState(task.completed);
  const [edit, setEdit] = useState(false);

  const handleStatus = useCallback(async () => {
    await UpdateTask(task.id, {
      completed: !status,
    });
    setStatus(!status);
    setEdit(!edit);
  }, [status, task, edit]);

  const handleDelete = useCallback(async () => {
    await DeleteTask(task.id);
    router.refresh();
  }, [task, router]);

  return (
    <div className="bg-slate-800 p-8 rounded-lg hover:bg-slate-700  flex flex-col gap-5 h-[30rem] ">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-trash "
          className="hover:cursor-pointer hover:scale-110 hover:text-red-500 "
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
          onClick={handleDelete}
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 7l16 0"></path>
          <path d="M10 11l0 6"></path>
          <path d="M14 11l0 6"></path>
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"></path>
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"></path>
        </svg>
        <div
          className="text-right hover:cursor-pointer "
          onClick={handleStatus}
        >
          <span className="text-sm text-gray-400 ">
            {status ? "Completed" : "Pending"}
          </span>
          <span
            className={`inline-block ml-2 px-2 py-1 rounded-full ${
              status ? "bg-green-500" : "bg-red-500"
            }`}
          />
        </div>
      </div>
      <div
        className="flex-1 flex flex-col hover:cursor-pointer"
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

          {edit
            ? new Date().toLocaleDateString()
            : new Date(task.updatedAt).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

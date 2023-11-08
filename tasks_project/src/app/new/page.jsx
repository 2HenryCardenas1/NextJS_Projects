"use client"; // <-- omit this line if you want to use this file on the server

import { CreateTask, GetTask, UpdateTask } from "@/api/task_req";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NewPage({ params }) {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [task, setTask] = useState({});
  const [status, setStatus] = useState(false);

  useEffect(() => {
    if (params.id) {
      GetTask(params.id).then((task) => {
        setTask(task);
        setTitle(task.title);
        setDescription(task.description);
        setStatus(task.completed);
      });
    }
  }, [params]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (params.id) {
      await UpdateTask(params.id, {
        title,
        description,
        completed: status,
      });
    } else {
      await CreateTask({ title, description });
    }
    router.refresh();
    router.push("/");
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col gap-5 mx-5 h-screen">
      <h1 className="text-5xl text-center font-bold">
        {params.id ? "Edit" : "Create"} Task
      </h1>

      <p className="text-lg font-light">
        {params.id
          ? "Edit the task that will change the world !"
          : "Create the new task that will change the world !"}
      </p>

      <form
        className="flex justify-center  flex-col gap-5  bg-slate-500 p-10 lg:w-6/12 rounded "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <div
            className="text-right hover:cursor-pointer"
            onClick={() => setStatus(!status)}
          >
            <span className="text-sm text-gray-200 ">
              {status ? "Completed" : "Pending"}
            </span>
            <span
              className={`inline-block ml-2 px-2 py-1 rounded-full ${
                status ? "bg-green-500" : "bg-red-500"
              }`}
            />
          </div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border border-gray-400 p-2 rounded text-black"
            type="text"
            placeholder="Title for your task"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Content</label>
          <textarea
            id="description"
            className="border border-gray-400 p-2 rounded text-black"
            placeholder="Description for your task"
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

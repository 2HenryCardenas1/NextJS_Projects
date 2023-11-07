"use client"; // <-- omit this line if you want to use this file on the server

import { CreateTask } from "@/api/task";
import { useRouter } from "next/navigation";

export default function NewPage() {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const description = e.target.description.value;

    try {
      await CreateTask({ title, description }).then((res) => {
        if (res !== undefined) {
          router.push("/");
        }
      });
    } catch (error) {
      router.push("/new");
      throw error;
    }
  };

  return (
    <div className="flex flex-wrap justify-center items-center flex-col gap-5 mx-5 h-screen">
      <h1 className="text-5xl text-center font-bold">Create you new task</h1>

      <p className="text-lg font-light">
        Create the new task to change the world !
      </p>

      <form
        className="flex justify-center  flex-col gap-5  bg-slate-500 p-10 lg:w-6/12 rounded "
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label htmlFor="title">Title</label>
          <input
            id="title"
            className="border border-gray-400 p-2 rounded text-black"
            type="text"
            placeholder="Title for your task"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="description">Content</label>
          <textarea
            id="description"
            className="border border-gray-400 p-2 rounded text-black"
            placeholder="Description for your task"
            rows={5}
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

import TaskCard from "@/components/TaskCard";
import { prisma } from "@/lib/prisma";

async function getTasks() {
  return await prisma.task.findMany();
}

export const dynamic = "force-dynamic";

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <div className="text-center mt-20">
      <h1 className="font-bold text-5xl">Tasks App</h1>
      <p className="font-sans text-xl mt-1">Your tasks list.</p>
      <section className="container mx-auto">
        <div className="grid grid-cols-1 gap-5 mx-5 md:grid-cols-2 lg:grid-cols-3  mt-5">
          {tasks.map((task) => {
            return <TaskCard task={task} key={task.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

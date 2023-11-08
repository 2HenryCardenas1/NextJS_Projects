import { GetTasks } from "@/api/task";
import TaskCard from "@/components/TaskCard";

export default async function HomePage() {
  const tasks = await GetTasks();

  return (
    <div className="text-center mt-20">
      <h1 className="font-bold text-5xl">Tasks App</h1>
      <p className="font-sans text-xl mt-1">Your tasks list.</p>
      <section className="container mx-auto">
        <div className="grid   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 mx-5 ">
          {tasks.map((task) => {
            return <TaskCard task={task} key={task.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

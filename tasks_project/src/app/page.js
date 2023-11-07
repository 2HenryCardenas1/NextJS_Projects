import { GetTasks } from "@/api/task";
import TaskCard from "@/components/TaskCard";

async function getTasks() {
  try {
    const tasks = await GetTasks();
    return tasks;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export default async function HomePage() {
  const tasks = await getTasks();

  return (
    <div className="text-center mt-20">
      <h1 className="font-bold text-5xl">Tasks App</h1>
      <p className="font-sans text-xl mt-1">Your tasks list.</p>
      <section className="container mx-auto">
        <div className="grid grid-cols-3 gap-5 mt-5">
          {tasks.map((task) => {
            return <TaskCard task={task} key={task.id} />;
          })}
        </div>
      </section>
    </div>
  );
}

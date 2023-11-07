import { URL_API } from "@/utils/constants";

// File to manage the requests to the API

export async function CreateTask(task) {
  const res = await fetch(`${URL_API}/api/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(task),
  });

  const result = await res.json();

  if (!res.ok) {
    throw result;
  }

  return result;
}

export async function GetTasks() {
  const rest = await fetch(`${URL_API}/api/tasks`);

  const result = await rest.json();

  if (!rest.ok) {
    throw result;
  }

  return result;
}

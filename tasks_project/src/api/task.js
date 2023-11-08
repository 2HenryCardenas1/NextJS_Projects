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
  try {
    const rest = await fetch(`${URL_API}/api/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await rest.json();

    if (!rest.ok) {
      throw result;
    }

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function GetTask(id) {
  const rest = await fetch(`${URL_API}/api/tasks/${id}`);

  const result = await rest.json();

  if (!rest.ok) {
    throw result;
  }

  return result;
}

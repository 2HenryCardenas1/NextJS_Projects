import UsersCard from "@/components/UsersCard";
import Link from "next/link";

async function loadUser() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();

  return data.data;
}

export default async function HomePage() {
  const users = await loadUser();

  return (
    <div className="flex flex-wrap gap-5 justify-center ">
      {users.map((user) => (
        <div
          key={user.id}
          className="mb-2 w-80 rounded-md border bg-gray-800 hover:border-cyan-600 hover:scale-105 transform transition-all"
        >
          <Link href={`/users/${user.id}`}>
            <UsersCard user={user} />
          </Link>
        </div>
      ))}
    </div>
  );
}

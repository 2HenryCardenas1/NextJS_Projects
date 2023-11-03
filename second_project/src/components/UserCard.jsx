import Image from "next/image";

export default function UserCard({ user }) {
  return (
    <div className="m-auto">
      <h1 className="text-4xl font-bold">
        Info for the {user.first_name} {user.last_name}
      </h1>

      <div className="flex flex-col items-center p-5 bg-gray-800 rounded-lg mt-10">
        <Image
          src={user.avatar}
          alt={user.first_name}
          width={200}
          height={200}
          loading="lazy"
          className="rounded-full hover:my-7 hover:scale-125 transform transition-all"
        />
        <h2 className="text-2xl font-semibold ">
          {user.first_name} {user.last_name}
        </h2>
        <p>{user.email}</p>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function UsersCard({ user }) {
  return (
    <div className="flex flex-col items-center   p-5">
      <Image
        src={user.avatar}
        alt={user.first_name}
        width={100}
        height={100}
        loading="lazy"
        className="rounded-full hover:opacity-80 "
      />
      <h2>
        {user.first_name} {user.last_name}
      </h2>
      <p>{user.email}</p>
    </div>
  );
}

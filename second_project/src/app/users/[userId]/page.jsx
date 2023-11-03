import UserCard from "@/components/UserCard";

const loadInfoUser = async (userId) => {
  const res = await fetch(`https://reqres.in/api/users/${userId}`);
  const data = await res.json();
  return data.data;
};

export default async function UserPage({ params }) {
  const data = await loadInfoUser(params.userId);

  return <UserCard user={data} />;
}

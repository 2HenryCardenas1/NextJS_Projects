import PostCard from "@/components/PostCard";

const loadPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  //await new Promise((resolve) => setTimeout(resolve, 3000));
  return posts;
};

export default async function PostsPages() {
  const posts = await loadPosts();

  return (
    <main className="text-center items-center mt-10 pt-5">
      <h1 className="text-6xl font-bold">Posts Page</h1>
      <h2 className="mt-5">What is Lorem Ipsum?</h2>

      <div className="flex flex-wrap justify-center gap-5 mt-10">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} readMore={true} />
        ))}
      </div>
    </main>
  );
}

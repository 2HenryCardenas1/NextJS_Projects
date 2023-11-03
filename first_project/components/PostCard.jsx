import Link from "next/link";

function PostCard({ post, readMore }) {
  return (
    <div className="flex flex-col justify-between items-center w-80  bg-gray-400 rounded-lg shadow-lg p-10 ">
      <h1 className="text-2xl font-bold text-black">
        {post.id} {post.title}
      </h1>
      <p className="text-lg">{post.body}</p>

      {readMore ? (
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          <Link href={`/posts/${post.id}`}> Read More </Link>
        </button>
      ) : null}
    </div>
  );
}

export default PostCard;

import PostCard from "@/components/PostCard";
import { Suspense } from "react";
import PostsPages from "../page";

const loadPost = async (idPost) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${idPost}`
  );
  const post = await res.json();

  return post;
};

export default async function Post(props) {
  const { params } = props;
  const post = await loadPost(params.idPost);

  return (
    <main className="text-center items-center mt-10 pt-5 ">
      <h1 className="text-6xl font-bold">Post Page</h1>
      <div className="flex justify-center mt-10 mb-10 ">
        <PostCard post={post} readMore={false} />
      </div>

      <hr />

      {/*  Cargamos la pagina Posts dentro de esta pagina con un suspense con el fin de
        que se muestre un loading mientras se carga la pagina Posts
            */}
      <Suspense fallback={<div>Loading...</div>}>
        <PostsPages />
      </Suspense>
    </main>
  );
}

import Link from "next/link";

export default function Navbar() {
  return (
    <div className="bg-slate-800">
      <section className="container mx-auto flex justify-between p-5">
        <Link href={"/"}>
          <h1 className="text-3xl font-bold">Navbar</h1>
        </Link>
        <ul>
          <Link
            href={"/new"}
            className="text-2xl font-bold flex items-center gap-x-1  hover:scale-110 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-circle-plus"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
              <path d="M9 12h6"></path>
              <path d="M12 9v6"></path>
            </svg>
            Create new task
          </Link>
        </ul>
      </section>
    </div>
  );
}

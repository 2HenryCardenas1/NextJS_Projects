import Link from "next/link";

function Navbar() {
  return (
    <div className="flex justify-between p-5 bg-white text-black mb-5">
      <h1 className="text-4xl font-bold">
        <Link href="/">Navbar</Link>
      </h1>
      <ul className="flex gap-5 items-center">
        <li className="text-2xl">
          <Link href="/" className="underline">
            Home
          </Link>
        </li>
        <li className="text-2xl ">
          <Link href="/abaout" className="underline">
            Abaout
          </Link>
        </li>
        <li className="text-2xl">
          <Link href="/posts" className="underline">
            Posts
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;

import Link from "next/link";
import Search from "./Search";

type Props = {};

export default function NavBar({}: Props) {
  return (
    <nav
      className="bg-slate-600 p-4 flex justify-between flex-col
    md:flex-row sticky top-0 drop-shadow-xl"
    >
      <h1 className="text-3xl font-bold text-white place-content-center grid mb-2 md:mb-0">
        <Link href="/">WikiRocket!</Link>
      </h1>
      <Search />
    </nav>
  );
}

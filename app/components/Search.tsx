"use client";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
type Props = {};

const Search = (props: Props) => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="w-50 flex justify-center md:justify-between"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-white p-2 w-80 text-xl rounded-xl text-black"
        placeholder="Search"
      />
      <button className="p-2 text-cl rounded-xl bg-slate-500 ml-2 font-bold">
        Submit
      </button>
    </form>
  );
};
export default Search;

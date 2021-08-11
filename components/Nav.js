import useform from "../lib/useForm";

import Link from "next/link";

export default function Nav({ state }) {
  const { handlechnage, initialvalue, query } = useform(state, "Autocomplete");
  debugger;
  return (
    <header className="shadow sticky top-0 shadow-HEADER z-10">
      <div className="bg-white flex h-24 ">
        <Link href="/">
          <div className="cursor-pointer w-16 h-16 bg-logo-myntra bg-top-4 my-auto ml-12"></div>
        </Link>
        <nav className="mt-auto mb-auto">
          <div className="m-auto flex mx-16 gap-6">
            <div>MEN</div>
            <div>WOMEN</div>
            <div>KIDS</div>
            <div>HOME & LIVING</div>
            <div>BEAUTY</div>
          </div>
        </nav>
        <div className="my-auto  relative">
          <input
            type="text"
            className="py-2 w-64 px-2  border rounded"
            placeholder="SEARCH"
            onChange={(e) => handlechnage(e, state)}
          ></input>
          {query.length > 0 && <Dropdown query={query} />}
        </div>
        <Link href="/addproduct">
          <div className="flex ">
            <div className="cursor-pointer w-12 h-12 bg-logo-myntra bg-top-5 my-auto ml-12"></div>
            <div className="cursor-pointer my-auto mx-2">ADD PRODUCT</div>
          </div>
        </Link>
      </div>
    </header>
  );
}

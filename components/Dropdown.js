import Link from "next/link";
import useFocus from "./useFocus";
import { useRef } from "react";
export default function Dropdown({ query, focused }) {
  debugger;
  return (
    <div
      className="z-10  absolute w-full  left-0 origin-top-right right-0  w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      id="dropdown"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
    >
      <ul className="py-1" role="none">
        {query.map((x, index) => (
          <li className="cursor-pointer hover:bg-blue">
            <Link href={`/products/${index + 1}`}>
              <a className="text-gray-700 block px-4 py-2 text-sm">{x}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
export default function SingleProduct({ handleclick, value }) {
  return (
    <div className="bg-white m-1 ">
      <Link href={`/products/${value.id}`}>
        <div>
          <img
            className=" cursor-pointer min-h-sm border-b shadow-HEADER"
            alt="Mountains"
            src={value?.image}
            layout="fixed"
          />
          <h1 className="cursor-pointer m-2.5 ">{value.name}</h1>
          <p className=" cursor-pointer m-2.5  min-h-xsm font-300">
            {value.description}
          </p>
        </div>
      </Link>
      <button
        name={value.id}
        className="m-auto flex justify-around"
        onClick={handleclick}
      >
        DELETE
      </button>
    </div>
  );
}

import { useRouter } from "next/router";
import { useEffect, useState } from "react";
export default function single() {
  const router = useRouter();
  const { id } = router.query;
  const [state, setState] = useState([]);
  useEffect(() => {
    const item = JSON.parse(localStorage.getItem("state"));
    setState(item);
  }, []);
  let productdetails;
  if (id) {
    productdetails = state?.filter((x) => x.id == id)[0];
  }
  console.log(productdetails);
  return (
    <div className=" bg-white-100  flex flex-col justify-center sm:py-12">
      {productdetails && (
        <div className=" bg-gray-100 flex justify-center items-center">
          <div className="container flex justify-center">
            <div className="max-w-sm">
              <div className="bg-white relative shadow-lg hover:shadow-xl transition duration-500 rounded-lg">
                <img
                  className="rounded-t-lg"
                  src={productdetails.image}
                  alt="image"
                />
                <div className="py-6 px-8 rounded-lg bg-white">
                  <h1 className="text-gray-700 font-bold text-2xl mb-3 hover:text-gray-900 hover:cursor-pointer">
                    {productdetails.name}
                  </h1>
                  <p className="text-gray-700 tracking-wide">
                    {productdetails.description}
                  </p>
                  <button className="mt-6 py-2  bg-yellow-400 text-gray-800 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300">
                    Buy Now
                  </button>
                </div>
                <div className="absolute top-2 right-2 py-2 px-4 bg-white rounded-lg">
                  <span className="text-md">$150</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

import useForm from "../lib/useForm";

export default function Addproduct() {
  const { clearform, initialvalue, handlechnage } = useForm("", {
    name: "",
    description: "wht is description",
    price: "",
    file: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, file, description, Price } = e.target.elements;
    debugger;
    let obj = {
      id: JSON.parse(localStorage.state).length + 1,
      name: [name.value][0],
      Price: [Price.value][0],
      description: [description.value][0],
      image: [file.value][0],
    };

    let newarr = [...JSON.parse(localStorage.state), obj];
    localStorage.setItem("state", JSON.stringify(newarr));
  };

  return (
    <div className="pt-16 m-auto flex">
      <div className="w-full  max-w-xl m-auto">
        <form
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
              type="text"
              placeholder="name"
              value={initialvalue.name}
              onChange={handlechnage}
            ></input>
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="description"
              type="text"
              name="description"
              onChange={handlechnage}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="Price"
            >
              Price
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="Price"
              type="text"
              name="number"
              onChange={handlechnage}
            ></input>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="file"
            >
              File
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="file"
              type="file"
              name="file"
              onChange={handlechnage}
            ></input>
          </div>
          <div className="flex items-center justify-between">
            <button
              className=" hover:bg-blue border text-black cursor-pointer font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Addproduct
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

import SingleProduct from "./SingleProduct";
import { useEffect, useState } from "react";
export default function Product() {
  const [state, setstate] = useState([]);
  const [count, setcount] = useState("");
  useEffect(() => {
    setstate(JSON.parse(localStorage.state));
  }, [count]);

  const handleclick = (value) => {
    const newarr = JSON.stringify(
      JSON.parse(localStorage.state).filter(
        (x) => x.id !== parseInt(value.target.name)
      )
    );
    localStorage.setItem("state", newarr);
    setstate(JSON.parse(newarr));
  };
  return (
    <div className="justify-between   gap-y-10 mx-12 py-4 grid-cols-autofill grid">
      {state.map((value, index) => (
        <SingleProduct handleclick={handleclick} value={value} key={index} />
      ))}
    </div>
  );
}

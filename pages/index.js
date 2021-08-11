import Product from "../components/Products";
import { createContext } from "react";
const Provider = createContext();
export default function Home() {
  return <Product />;
}

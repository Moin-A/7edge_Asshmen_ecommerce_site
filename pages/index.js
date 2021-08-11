import Image from "next/image";
import styles from "../styles/Home.module.css";
import Nav from "../components/Nav";
import Product from "../components/Products";
import { createContext } from "react";
const Provider = createContext();
export default function Home() {
  return <Product />;
}

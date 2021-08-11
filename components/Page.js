import React, { Component, useState, useEffect } from "react";
import { config } from "../config";
import Nav from "./Nav";

export default function Page({ children }) {
  const [state, setstate] = useState(config);

  useEffect(() => {
    window?.localStorage?.setItem("state", JSON.stringify(config));
  }, []);
  return (
    <>
      <Nav state={state} />
      {children}
    </>
  );
}

import { useState, useEffect } from "react";
import Match from "./Match";
export default function useForm({ state }, task) {
  const [initialvalue, setName] = useState(task);
  const [query, setQuery] = useState([]);

  function handlechnage(e, state) {
    let { type, name, value } = e.target;
    if (task == "Autocomplete") {
      const query = Match(value.toUpperCase(), state);
      setQuery(query);
    }
    debugger;
    if (type == "number") {
      value = parseInt(value);
    }
    if (type == "file") {
      debugger;
      [value] = e.target.files;
    }

    return setName({ ...initialvalue, [name]: value });
  }

  function clearform() {
    setName(initial);
  }

  return {
    handlechnage,
    clearform,
    query,
    initialvalue,
  };
}

import { useState } from "react";

export default function Focus(value) {
  const [focused, setFocused] = useState(true);

  function setFocustrue() {
    setFocused(true);
  }
  function setFocusfalse() {
    setFocused(false);
  }
  return {
    setFocusfalse,
    focused,
    setFocustrue,
  };
}

import { useState } from "react";

function useInput() {
  const [input, setInput] = useState("");

  const onChnage = (e) => {
    setInput(e.target.value);
  };

  return [input, onChnage];
}

export default useInput;

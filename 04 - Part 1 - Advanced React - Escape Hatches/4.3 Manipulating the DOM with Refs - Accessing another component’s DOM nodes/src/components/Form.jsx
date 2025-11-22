import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <MyInput type="text" placeholder="Enter name" ref={inputRef} />
      <button onClick={handleFocusInput}>Focus the input</button>
    </>
  );
}

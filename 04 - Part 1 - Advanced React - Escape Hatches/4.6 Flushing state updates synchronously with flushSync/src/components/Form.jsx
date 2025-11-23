import { useRef } from "react";
import MyInput from "./MyInput";

export default function Form() {
  const inputRef = useRef(null);

  const handleFocusInput = () => {
    inputRef.current.focus();
    inputRef.current.borderRadius("10px");
  };

  return (
    <>
      <MyInput type="text" placeholder="Enter name" ref={inputRef} />
      <button onClick={handleFocusInput}>Focus the input</button>
    </>
  );
}

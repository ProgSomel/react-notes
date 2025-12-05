import { useState } from "react";

export default function useFormInput(intialValue) {
  const [value, setValue] = useState(intialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

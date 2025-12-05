import React from "react";
import useFormInput from "../hooks/useFormInput";

export default function Form() {
  const firstNameProps = useFormInput("Mary");
  const lastNameProps = useFormInput("Poppins");

  return (
    <>
      <label htmlFor="">
        First Name:
        <input type="text" {...firstNameProps} />
      </label>
      <br />
      <label htmlFor="">
        Last Name:
        <input type="text" {...lastNameProps} />
      </label>
      <p>
        <b>
          Good day, {firstNameProps.value} {lastNameProps.value}!
        </b>
      </p>
    </>
  );
}

import React, { useState } from "react";
import { submitForm } from "../util/submitForm";

//? visual states: typing, submitting, success

export default function Form() {
  //! Mandatory data states
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);

  //! final states from visual states
  const [status, setStatus] = useState("typing");

  //! Handlers
  const handleTextChange = (e) => {
    setError(null);
    setAnswer(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitForm(answer);
      setStatus("success");
    } catch (error) {
      setStatus("typing");
      setError(error.message);
    }
  };

  if (status === "success") return <h1>That's right!</h1>;
  return (
    <>
      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextChange}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={answer.length === 0 || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}

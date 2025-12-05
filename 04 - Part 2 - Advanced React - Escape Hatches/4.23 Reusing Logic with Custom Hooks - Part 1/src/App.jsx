import React from "react";
import StatusBar from "./components/StatusBar";
import SaveButton from "./components/SaveButton";
import Form from "./components/Form";

export default function App() {
  return (
    <div>
      <StatusBar />
      <SaveButton />
      <hr />
      <Form />
    </div>
  );
}

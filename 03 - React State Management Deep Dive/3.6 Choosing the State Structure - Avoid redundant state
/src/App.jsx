import { useState } from "react";
import Mirror from "./components/Mirror";
import "./styles.css";

export default function TaskApp() {
  const [color, setColor] = useState("red");
  return (
    <div>
      <Mirror messageColor={color} />
      <button onClick={() => setColor("blue")}>Change Color from Parent</button>
    </div>
  );
}

import { useState } from "react";
import Example from "./components/Example";
import { items1, items2 } from "./data/itemsData";

export default function App() {
  const [items, setItems] = useState(items1);

  return (
    <div>
      <button onClick={() => setItems(items2)}>Switch to Items2</button>{" "}
      <button onClick={() => setItems(items1)}>Switch to Items1</button>{" "}
      <Example items={items} />
    </div>
  );
}

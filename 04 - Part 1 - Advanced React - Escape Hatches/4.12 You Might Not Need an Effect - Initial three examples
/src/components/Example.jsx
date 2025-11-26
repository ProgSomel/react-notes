import React, { useState } from "react";

export default function Example({ items }) {
  const [selectedID, setSelectedID] = useState(null);

  // Find selection
  const selection = items.find((item) => item.id === selectedID) ?? null;

  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {" "}
            {/* ✅ Added key */}
            <input
              type="checkbox"
              checked={item.id === selectedID}
              onChange={() => setSelectedID(item.id)}
            />{" "}
            {item.title} {/* ✅ Removed unnecessary ?. */}
          </li>
        ))}
      </ul>

      {selection && (
        <div>
          <h2>Selected Item</h2>
          <div
            style={{
              padding: "10px",
              backgroundColor: "lightcyan",
            }}
          >
            {selection.title} {/* ✅ Removed unnecessary ?. */}
          </div>
        </div>
      )}
    </>
  );
}

import React from "react";

export default function Button({ onSmash, children, styles }) {
  return (
    <button onClick={onSmash} className={`rounded-md text-sm ${styles}`}>
      {children}
    </button>
  );
}

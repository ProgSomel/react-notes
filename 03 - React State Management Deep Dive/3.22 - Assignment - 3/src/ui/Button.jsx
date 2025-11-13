import React from "react";
import { cn } from "../utils/cn";

export default function Button({ className, children, ...restProps }) {
  return (
    <button
      className={cn(
        "cursor-pointer w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center",
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
}

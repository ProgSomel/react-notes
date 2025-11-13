import React from "react";
import { cn } from "../utils/cn";

export default function Link({
  className,
  to,
  isNavItem = true,
  children,
  ...restProps
}) {
  return (
    <a
      href={to}
      {...restProps}
      className={cn(
        "cursor-pointer",
        {
          "hover:text-gray-500 transition-colors": isNavItem,
        },
        className
      )}
    >
      {children}
    </a>
  );
}

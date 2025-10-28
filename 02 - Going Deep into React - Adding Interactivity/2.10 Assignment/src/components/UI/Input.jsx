import React from "react";

export default function Input({
  label,
  type,
  placeholder,
  value,
  onChangeValue,
  required = true,
  className,
}) {
  return (
    <input
      type={type}
      className={`
        bg-opacity-50 focus:ring-primary w-full rounded-md bg-gray-700 p-2 transition-all duration-300 focus:ring-2 focus:outline-none 
        ${className}
       `}
      placeholder={placeholder}
      value={value}
      onChange={onChangeValue}
      required={required}
    />
  );
}

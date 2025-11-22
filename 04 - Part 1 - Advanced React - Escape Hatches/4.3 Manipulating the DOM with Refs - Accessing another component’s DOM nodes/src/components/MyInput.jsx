import React, { forwardRef } from "react";

const MyInput = function ({ props, ref }) {
  return <input {...props} ref={ref} />;
};

// Higher order component
const forwarededMyInput = forwardRef(MyInput);

export default forwarededMyInput;

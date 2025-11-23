import React, { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  useImperativeHandle(ref, () => ({
    // retuning an object
    focus() {
      realInputRef.current.focus();
    },
    borderRadius(value) {
      realInputRef.current.style.borderRadius = value;
    },
  }));

  return <input {...props} ref={realInputRef} />;
});

export default MyInput;

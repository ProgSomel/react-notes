import React, { useEffect, useState } from "react";

export default function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange]);
  return <div>Toggle</div>;
}

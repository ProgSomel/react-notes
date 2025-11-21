import { useRef, useState } from 'react';

export default function Counter() {
  const [text, setText] = useState('');
  const ref = useRef(text);

  function handleSend() {
    setTimeout(() => {
      alert('Sending: ' + ref.current);
    }, 3000);
  }

  return (
    <>
      <input
        value={text}
        onChange={e => {
          setText(e.target.value);
          ref.current = e.target.value;
        }}
      />
      <button
        onClick={handleSend}>
        Send
      </button>
    </>
  );
}

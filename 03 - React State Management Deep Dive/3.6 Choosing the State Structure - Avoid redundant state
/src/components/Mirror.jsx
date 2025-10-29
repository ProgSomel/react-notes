export default function Mirror({ messageColor }) {
  let color = messageColor;
  return (
    <div>
      <div style={{ color }}>Hello World</div>

      <br />
      <button onClick={() => (color = "green")}>Change Color from child</button>
    </div>
  );
}

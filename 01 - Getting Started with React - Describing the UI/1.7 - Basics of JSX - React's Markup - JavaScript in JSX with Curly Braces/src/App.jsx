const style1 = {
  backgroundColor: "red",
};

const style2 = {
  backgroundColor1: "green",
};

const color = "green";

export default function App() {
  return (
    <ul style={color === "green" ? style1 : style2}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}

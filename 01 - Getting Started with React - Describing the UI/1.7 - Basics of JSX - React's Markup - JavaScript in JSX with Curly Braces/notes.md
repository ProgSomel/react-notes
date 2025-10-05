# 1.7 - Basics of JSX: React's Markup - JavaScript in JSX with Curly Braces
use {} -> Curly Braces for dynamic value
```javascript
export default function App() {
  return (
    <ul style={{
      backgroundColor: 'black',
      color: 'pink'
    }}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
```
First, {} in style for **dynamic** value. And second {} is for style-object.

**-----------------------------------------------------------------------------------------------------------------------------**

```javascript
const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
```

**-----------------------------------------------------------------------------------------------------------------------------**

```javascript
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
```
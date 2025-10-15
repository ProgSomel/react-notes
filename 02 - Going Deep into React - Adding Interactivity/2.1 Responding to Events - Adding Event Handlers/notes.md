# 2.1 Responding to Events - Adding Event Handlers

```javascript
export default function App() {
  function handleClick() {
    console.log("Button Clicked");
  }
  return <button onClick={handleClick}>I don't do anything</button>;
}
```

---

```javascript
export default function App() {
  return (
    <button
      onClick={function handleClick() {
        console.log("Button Clicked");
      }}
    >
      I don't do anything
    </button>
  );
}
```

---

```javascript
export default function App() {
  return (
    <button
      onClick={() => {
        console.log("Button Clicked");
      }}
    >
      I don't do anything
    </button>
  );
}
```

---

```javascript
function AlertButton({ message, children }) {
  return <button onClick={() => alert(message)}>{children}</button>;
}

export default function Toolbar() {
  return (
    <div>
      <AlertButton message="Playing!">Play Movie</AlertButton>
      <AlertButton message="Uploading!">Upload Image</AlertButton>
    </div>
  );
}
```

**----------------------------------------------------------------------------------------------------------------------------**

## passing event handlers as a props
```javascript
function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  function handlePlayClick() {
    alert(`Playing ${movieName}!`);
  }

  return <Button onClick={handlePlayClick}>Play "{movieName}"</Button>;
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading!")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service" />
      <UploadButton />
    </div>
  );
}
```

----------------------------------------------------------------------------------------------------------------------------

```javascript
function Button({ onSmash, children }) {
  return (
    <button onClick={onSmash}>
      {children}
    </button>
  );
}

export default function App() {
  return (
    <div>
      <Button onSmash={() => alert('Playing!')}>
        Play Movie
      </Button>
      <Button onSmash={() => alert('Uploading!')}>
        Upload Image
      </Button>
    </div>
  );
}
```
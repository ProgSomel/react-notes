## Lifting the state up
component works as a single unit, it will work with it's private data. If it want to work with other's component's data then we have to pass data as props to this component.

If we want to communicate from multiple children components, then we should not communicate data from those children components. we should communicate from parent component, it is easy for us.
Like:
if there is two children in home. if they need pen. Then they should ask their parents about the pen not discuss with each other that i need a pen.

**Parent component will manage the state. And parent component can pass the state to child component. This concept is called Lifting state up.**
```javascript
import React from "react";
import { useState } from "react";

/*
Game
  -> Board
    -> Square
  -> History 
*/

function Square({value}) {

  function handleClick() {
  }

  return (
    <button
      className="bg-white border border-gray-400 
      h-12 w-12 m-1 leading-9 
      text-lg
    "
      onClick={handleClick}
    >
      {value} {/* whenever the value changes, react re-render the component */}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} />
        <Square value={squares[1]} />
        <Square value={squares[2]} />
      </div>
      <div className="flex">
        <Square value={squares[3]} />
        <Square value={squares[4]} />
        <Square value={squares[5]} />
      </div>
      <div className="flex">
        <Square value={squares[6]} />
        <Square value={squares[7]} />
        <Square value={squares[8]} />
      </div>
    </>
  );
}
```

-------------------------------------------------------------------------------------------------------------------------

```javascript
import React from "react";
import { useState } from "react";

/*
Game
  -> Board
    -> Square
  -> History 
*/

function Square({value, onSquareClick}) {

  return (
    <button
      className="bg-white border border-gray-400 
      h-12 w-12 m-1 leading-9 
      text-lg
    "
      onClick={onSquareClick}
    >
      {value} {/* whenever the value changes, react re-render the component */}
    </button>
  );
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    console.log("Cliked");
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
```

**-----------------------------------------------------------------------------------------------------------------------------**

```javascript
import React from "react";
import { useState } from "react";

/*
Game
  -> Board
    -> Square
  -> History 
*/

function Square({value, onSquareClick}) {

  return (
    <button
      className="bg-white border border-gray-400 
      h-12 w-12 m-1 leading-9 
      text-lg"
      onClick={onSquareClick}
    >
      {value} {/* whenever the value changes, react re-render the component */}
    </button>
  );
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    squares[0] = "x";
    setSquares(squares)
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
```
Here it will not change the UI, if click on the square, because react will see that we use the same variable **squares** in:
```javascript
setSquares(squares)
```
So it will think that it doesn't need to re-render because it is same variable.

To solve this problem we need to declare new object or new variable then assign the values.
We can use like below:
```javascript
import React from "react";
import { useState } from "react";

/*
Game
  -> Board
    -> Square
  -> History 
*/

function Square({value, onSquareClick}) {

  return (
    <button
      className="bg-white border border-gray-400 
      h-12 w-12 m-1 leading-9 
      text-lg"
      onClick={onSquareClick}
    >
      {value} {/* whenever the value changes, react re-render the component */}
    </button>
  );
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    squares[0] = "x";
    setSquares([...squares])
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
```
but it has also some problems. Here, we are changing the original variable the squares, and it will be modified. And if we need this value next time, then we will not get the previous values. Here in this game we have a section **History**, which will track the History, so that we need to have the original values from **squares**.
```javascript
import React from "react";
import { useState } from "react";

/*
Game
  -> Board
    -> Square
  -> History 
*/

function Square({ value, onSquareClick }) {
  return (
    <button
      className="bg-white border border-gray-400 
      h-12 w-12 m-1 leading-9 
      text-lg"
      onClick={onSquareClick}
    >
      {value} {/* whenever the value changes, react re-render the component */}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handleClick() {
    const nextSquares = squares.slice();
    nextSquares[0] = "x";
    squares[0] = "x";
    setSquares(nextSquares);
  }

  return (
    <>
      <div className="flex">
        <Square value={squares[0]} onSquareClick={handleClick} />
        <Square value={squares[1]} onSquareClick={handleClick} />
        <Square value={squares[2]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[3]} onSquareClick={handleClick} />
        <Square value={squares[4]} onSquareClick={handleClick} />
        <Square value={squares[5]} onSquareClick={handleClick} />
      </div>
      <div className="flex">
        <Square value={squares[6]} onSquareClick={handleClick} />
        <Square value={squares[7]} onSquareClick={handleClick} />
        <Square value={squares[8]} onSquareClick={handleClick} />
      </div>
    </>
  );
}
```
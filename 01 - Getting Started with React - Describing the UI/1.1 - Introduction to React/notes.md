# 01 - Introduction to React
The library for web and native(for mobile) user interface
It is a javascript Library

**Library** -> means it is focused on a particular thing. Like: React is focused on only building user interface

**Framework** -> It is tool set, where it is concerned with all things. Like: to build a full project what you needs.

**UI -> User Interface** -> Browser's FrontEnd.

In 2011, Jordan Walke(Facebook's software engineer), first bring the React.js concept. 
It is inspired by php's component based Framework, which is called XHP-JS.

--------------------------------------------------------------------------------------------------------------------

## React VS ReacDOM
React is a user interface Library. It helps to build user interface. To make a User Interface, we need to do two things.
- build DOM, rendering DOM
- handling User Interaction
Then finally render it on webpage.
In vanilla javascript, rendering occurs using DOM.
When we open a .html file like index.html on Browser, Browser will read the file and will make it's DOM.
Then manipulating DOM, javascript makes interaction.
HTML helps to make DOM easily.
Reac and ReactDOM both package do the same works
### React
In case of React, it helps to build user's interaction and user interface.
### ReacDOM
Finally, ReactDOM prints all the things, means render.
but in rendering React does not use DOM firstly, React does it in two steps,
- at first it uses it's self DOM, which is called virtual DOM, do the rough work in this.
- then Finally changes on the DOM.

That's why we need both React and ReacDOM.
```javascript
console.log(React);
console.log(ReactDom);
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const p = document.createElement("p");
p.innerText = "Hello World";

document.getElementById("root").appendChild(p);
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const myElement = React.createElement('div', null, 'Hello World');

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const myElement = React.createElement('div', null, React.createElement('p', null, "Hello World"));

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
```

-----------------------------------------------------------------------------------------------------------------------

## jsx -> javascript XML
```javascript
//? jsx -> javascript XML
const myElement = (
    <div>
        <p>Hello World</p>
    </div>
)
/*
browser does not know about above syntax(jsx), it is introduced by react.
So to run it on browser, we need to use Transpiler, it will convert this jsx code to 
javascript code. We will use BABEL as Transpiler.
So, to use BABEL, add below script on html file under react's script but above the js's script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
also add type attribute to js's script:
<script type="text/babel" src="reactScript.js"></script>
*/

ReactDOM.createRoot(document.getElementById('root')).render(myElement);
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const productPrice = 5000;

function Product() {
  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span id="total" className="text-xl font-medium text-teal-500"></span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span id="price" className="text-2xl font-bold text-slate-300"></span>
          <a
            id="button"
            href="#"
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
/*
browser does not know about above syntax(jsx), it is introduced by react.
So to run it on browser, we need to use Transpiler, it will convert this jsx code to 
javascript code. We will use BABEL as Transpiler.
So, to use BABEL, add below script on html file under react's script but above the js's script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
also add type attribute to js's script:
<script type="text/babel" src="reactScript.js"></script>
*/

ReactDOM.createRoot(document.getElementById("root")).render(Product());
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const productPrice = 5000;

function Product() {
  const [quantity, setQuantity] = React.useState(0);

  function addToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span id="total" className="text-xl font-medium text-teal-500">
            {quantity * productPrice}
          </span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span id="price" className="text-2xl font-bold text-slate-300">
            Taka: {productPrice}
          </span>
          <a
            onClick={addToCart}
            href="#"
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
/*
browser does not know about above syntax(jsx), it is introduced by react.
So to run it on browser, we need to use Transpiler, it will convert this jsx code to
javascript code. We will use BABEL as Transpiler.
So, to use BABEL, add below script on html file under react's script but above the js's script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
also add type attribute to js's script:
<script type="text/babel" src="reactScript.js"></script>
*/

ReactDOM.createRoot(document.getElementById("root")).render(<Product />);
```

-----------------------------------------------------------------------------------------------------------------------

```javascript
const productPrice = 5000;

function Product() {
  const [quantity, setQuantity] = React.useState(0);

  function addToCart() {
    setQuantity(quantity + 1);
  }

  return (
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
      <a href="#">
        <img
          className="rounded-t-lg"
          src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
          alt="product image"
        />
      </a>
      <div className="px-5 py-5">
        <div className="flex items-center justify-between mt-5">
          <a href="#">
            <h3 className="font-semibold text-xl tracking-tight">
              Reactive Accelerator Course
            </h3>
          </a>
          <span id="total" className="text-xl font-medium text-teal-500">
            {quantity * productPrice}
          </span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span id="price" className="text-2xl font-bold text-slate-300">
            Taka: {productPrice}
          </span>
          <a
            onClick={addToCart}
            href="#"
            className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
}
/*
browser does not know about above syntax(jsx), it is introduced by react.
So to run it on browser, we need to use Transpiler, it will convert this jsx code to
javascript code. We will use BABEL as Transpiler.
So, to use BABEL, add below script on html file under react's script but above the js's script
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
also add type attribute to js's script:
<script type="text/babel" src="reactScript.js"></script>
*/

ReactDOM.createRoot(document.getElementById("root")).render(
    <>  
        //?components. not a dumb components
        <Product />
        <Product />
    </>
);
```

--------------------------------------------------------------------------------------------------------------------


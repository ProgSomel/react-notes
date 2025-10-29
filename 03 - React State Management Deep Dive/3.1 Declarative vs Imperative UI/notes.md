# 3.1 Declarative vs Imperative UI

In Programming, there is two paradigm:

1. Declarative
2. Imperative

## How declarative UI compares to imperative

**Declarative** - Like Anouncement(You have to learn React)
**Imperative** - Like Details(What is React? How Does it work?. etc)

### Declarative

If you book an uber, then tell that i will go to Gulshan 2. Then it is driver's responsibility to reach you to the destination, this is driver's responsibility how to reach.

### Imperative

If you book an uber, then tell driver to go left, then right, then straight.(with details, instruct all the steps ). **Do not tell about the end goal**.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      * {
        box-sizing: border-box;
      }
      body {
        font-family: sans-serif;
        margin: 20px;
        padding: 0;
      }
    </style>
  </head>
  <body>
    <h2>City quiz</h2>
    <p>What city is located on two continents?</p>
    <form id="form">
      <textarea id="textarea"></textarea>
      <br />
      <button id="button" disabled>Submit</button>
      <p id="loading" style="display: none">Loading...</p>
      <p id="error" style="display: none; color: red"></p>
    </form>
    <h1 id="success" style="display: none">That's right!</h1>

    <script src="./index.js"></script>
  </body>
</html>
```
```javascript
// select DOM elements
let form = document.getElementById("form");
let textarea = document.getElementById("textarea");
let button = document.getElementById("button");
let loadingMessage = document.getElementById("loading");
let errorMessage = document.getElementById("error");
let successMessage = document.getElementById("success");

// event handlers
form.onsubmit = handleFormSubmit;
textarea.oninput = handleTextareaChange;

async function handleFormSubmit(e) {
  e.preventDefault();
  disable(textarea);
  disable(button);
  show(loadingMessage);
  hide(errorMessage);
  try {
    await submitForm(textarea.value);
    show(successMessage);
    hide(form);
  } catch (err) {
    show(errorMessage);
    errorMessage.textContent = err.message;
  } finally {
    hide(loadingMessage);
    enable(textarea);
    enable(button);
  }
}

function handleTextareaChange() {
  if (textarea.value.length === 0) {
    disable(button);
  } else {
    enable(button);
  }
}

function hide(el) {
  el.style.display = "none";
}

function show(el) {
  el.style.display = "";
}

function enable(el) {
  el.disabled = false;
}

function disable(el) {
  el.disabled = true;
}

function submitForm(answer) {
  // Pretend it's hitting the network.
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (answer.toLowerCase() === "dhaka") {
        resolve();
      } else {
        reject(new Error("Good guess but a wrong answer. Try again!"));
      }
    }, 3000);
  });
}

```
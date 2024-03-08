const $display = document.querySelector(".display");
const $buttons = document.querySelectorAll("button");

let buffer = "0";
let previousValue = 0;
let previousOperator = "";

// Function Declaration is instantly fully initialized.

// When a Lexical Environment is created, a Function Declaration immediately becomes a ready-to-use function (unlike let, that is unusable till the declaration).
// link -> https://javascript.info/closure#step-2-function-declarations
init();

function init() {
  $buttons.forEach(($button) => {
    $button.addEventListener("click", (e) =>
      handleBtnClick(e.target.textContent)
    );
  });
  rerender();
}

function rerender() {
  $display.textContent = buffer;
}

function handleBtnClick(char) {
  if (isNaN(Number(char))) {
    handleSymbol(char);
  } else {
    handleNumber(char);
  }
}

function handleSymbol(symbol) {
  switch (symbol) {
    case "C":
      buffer = "0";
      previousValue = 0;
      rerender();
      break;
    case "←":
      if (buffer.length === 1) {
        buffer = "0";
      } else {
        buffer = buffer.slice(0, -1);
      }
      rerender();
      break;
    case "=":
      buffer = String(calculate());
      previousValue = 0;
      rerender();
      break;
    default:
      handleOperation(symbol);
  }
}

function handleNumber(number) {
  if (buffer === "0") {
    buffer = number;
  } else {
    buffer += number;
  }
  rerender();
}

function handleOperation(operator) {
  wink();

  if (previousValue) {
    previousValue = calculate();
  } else {
    previousValue = Number(buffer);
  }
  previousOperator = operator;
  buffer = "0";
  rerender();
}

function calculate() {
  let bufferValue = Number(buffer);
  let sum = 0;

  switch (previousOperator) {
    case "+":
      sum = previousValue + bufferValue;
      break;
    case "-":
      sum = previousValue - bufferValue;
      break;
    case "×":
      sum = previousValue * bufferValue;
      break;
    case "÷":
      sum = previousValue / bufferValue;
  }

  return sum;
}

function wink() {
  $display.style.color = "transparent";
  setTimeout(() => {
    $display.style.color = "white";
  }, 100);
}

function removeLastDigit() {
  buffer = buffer.slice(0, -1);
  rerender();
}

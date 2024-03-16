const $windowWidth = document.getElementById("windowWidth");

const $minElement = document.getElementById("minElement");
const $minRelative = document.getElementById("minRelative");
const $minAbsolute = document.getElementById("minAbsolute");

const $maxElement = document.getElementById("maxElement");
const $maxRelative = document.getElementById("maxRelative");
const $maxAbsolute = document.getElementById("maxAbsolute");

const $clampElement = document.getElementById("clampElement");
const $clampMin = document.getElementById("clampMin");
const $clampMax = document.getElementById("clampMax");
const $clampRelative = document.getElementById("clampRelative");

function init() {
  handleMin();
  handleMax();
  handleClamp();
}

init();

window.onresize = () => {
  reportWindowWidth();
  handleMin();
  handleMax();
  handleClamp();
};

function reportWindowWidth() {
  $windowWidth.textContent = window.innerWidth + "px";
}

function handleMin() {
  const width = $minElement.offsetWidth;
  $minElement.querySelector("#val").textContent = width + "px";
  $minAbsolute.classList.toggle("highlighted", width >= 400);
  $minRelative.classList.toggle("highlighted", width < 400);
}

function handleMax() {
  const width = $maxElement.offsetWidth;
  $maxElement.querySelector("#val").textContent = width + "px";
  console.log(width);
  $maxRelative.classList.toggle("highlighted", width > 400);
  $maxAbsolute.classList.toggle("highlighted", width <= 400);
}

function handleClamp() {
  const width = $clampElement.offsetWidth;
  $clampElement.querySelector("#val").textContent = width + "px";
  console.log($clampMin);
  $clampMin.classList.toggle("highlighted", width <= 400);
  $clampRelative.classList.toggle("highlighted", 400 < width && width < 700);
  $clampMax.classList.toggle("highlighted", width >= 700);
}

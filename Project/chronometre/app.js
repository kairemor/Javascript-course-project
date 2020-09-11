let date = new Date();

let hr = 0;
let mn = 0;
let sc = 0;
let ms = 0;
var timeId = 0;

function init() {
  hr = 0;
  mn = 0;
  sc = 0;
  ms = 0;
  let chr = hr + " : " + mn + " : " + sc + " : " + ms;
  document.getElementById("chrono").textContent = chr;
}
init();

function stop() {
  init();
  inStop = true;
  clearTimeout(timeId);
}

function start() {
  ms += 1;
  if (ms >= 60) {
    sc += 1;
    ms = 0;
  }
  if (sc >= 59) {
    mn += 1;
    sc = 0;
  }
  if (mn >= 59) {
    hr += 1;
    mn = 0;
  }
  chr = hr + " : " + mn + " : " + sc + " : " + ms;
  document.getElementById("chrono").textContent = chr;

  timeId = setTimeout(() => {
    start();
  }, 16);
}

const countDisplay = document.getElementById("count-display");
const countStarter = document.getElementById("count-starter");

let count = 0;

const countUp = function () {
  count += 1;

  countDisplay.textContent = count / 100 + "秒経過";
};

let id = null;

countStarter.onclick = function () {
  if (id === null) {
    id = setInterval(countUp, 10);
    countStarter.textContent = "stop";
  } else {
    clearInterval(id);
    id = null;
    countStarter.textContent = "start";
  }
};

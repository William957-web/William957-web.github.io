const popCat = document.querySelector("img");
const score = document.querySelector("h6");
const resetBtn = document.querySelector("button");
const container = document.querySelector(".container");

var audio = new Audio("audio/pop.mp3");

let popCount = 0;

function rotateCat() {
  let randomNum = Math.round(Math.random());
  Boolean(randomNum) === true
    ? popCat.classList.add("rotate")
    : popCat.classList.remove("rotate");

}

function saveScore(popCount) {
  localStorage.setItem("count", popCount);
}

function loadScore() {
  popCount = localStorage.getItem("count");
  localStorage.getItem("count") === null
    ? (score.innerText = "Press P and S to record your score!")
    : (score.innerText = `Your POP Count : ${localStorage.getItem("count")}`);
}

function keyDown(event) {
  if (event.code === "KeyP") {
    popCat.src = "images/pop.png";
    const hidden = document.createElement("span");
    hidden.classList.add("hidden");
    hidden.classList.add("active");
    hidden.innerText = "Buggggggg";
    container.appendChild(hidden);
    audio.currentTime = 0;
    audio.play();
    rotateCat();
    document.querySelectorAll("span").forEach((e) => {
      e.style.top = `${Math.round(Math.random() * 20)}%`
      e.style.left = `${Math.round(Math.random() * -5)}%`
      e.style.right = `${Math.round(Math.random() * 5)}%`
    });
  } else if (event.code === "KeyS") {
    popCat.src = "images/pop.png";
    const hidden = document.createElement("span");
    hidden.classList.add("hidden");
    hidden.classList.add("active");
    hidden.innerText = "Buggggggg";
    container.appendChild(hidden);
    audio.currentTime = 0;
    audio.play();
    rotateCat();
    document.querySelectorAll("span").forEach((e) => {
      e.style.top = `${Math.round(Math.random() * 20)}%`
      e.style.left = `${Math.round(Math.random() * -5)}%`
      e.style.right = `${Math.round(Math.random() * 5)}%`
    });
  }
}

function keyUp(event) {
  if (event.code === "KeyP") {
    popCat.src = "images/normal.png";
    popCount++;
    score.innerText = `Your POP Count : ${popCount}`;
    saveScore(popCount);
  } else if (event.code === "KeyS") {
    popCat.src = "images/normal.png";
    popCount++;
    score.innerText = `Your POP Count : ${popCount}`;
    saveScore(popCount);
  }
}

function touchStart() {
  popCat.src = "images/pop.png";
  audio.play();
  rotateCat();
}

function touchEnd() {
  popCat.src = "images/normal.png";
  popCount++;
  score.innerText = `Your POP Count : ${popCount}`;
  saveScore(popCount);
}

function init() {
  popCat.addEventListener("touchstart", touchStart);
  popCat.addEventListener("touchend", touchEnd);
  window.onkeydown = (e) => keyDown(e);
  window.onkeyup = (e) => keyUp(e);
  resetBtn.addEventListener("click", () => {
    localStorage.removeItem("count");
    popCount = 0;
    score.innerText = "Press P and record your score!";
  });
  loadScore();
}

init();

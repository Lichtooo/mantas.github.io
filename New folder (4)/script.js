"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--Tep");
const noButton = document.querySelector(".btn--Nou");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 5;

let play = true;
let noCount = 0;

TepButton.addEventListener("click", handleTepClick);

NouButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const imageIndex = Math.min(noCount, MAX_IMAGES);
    changeImage(imageIndex);
    resizeTepButton();
    updateNouButtonText();
    if (noCount === MAX_IMAGES) {
      play = false;
    }
  }
});

function handleTepClick() {
  titleElement.innerHTML = "Yayyy!! :3";
  buttonsContainer.classList.add("hidden");
  changeImage("Tep");
}

function resizeTepButton() {
  const computedStyle = window.getComputedStyle(TepButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  const newFontSize = fontSize * 1.6;

  TepButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
  const messages = [
    "Nou",
    "Tikaraai?",
    "Pookie please",
    "Don't do this to me :(",
    "Dauzai man sirdi",
    "Eisiu paverkt i kampa...",
  ];

  const messageIndex = Math.min(noCount, messages.length - 1);
  return messages[messageIndex];
}

function changeImage(image) {
  catImg.src = `img/cat-${image}.jpg`;
}

function updateNoButtonText() {
  TepButton.innerHTML = generateMessage(NouCount);
}

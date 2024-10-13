"use strict";

const grid = document.querySelector(".grid");

const resizeBtn = document.getElementById("resize");
const resize = () => {
  return prompt("Enter the number of columns between 1 and 100");
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const createDiv = (number) => {
  for (let i = 1; i <= number ** 2; i++) {
    const div = document.createElement("div");
    grid.appendChild(div);
    div.style.cursor = "pointer";
    div.style.width = `${100 / number}%`;
    div.style.height = `${100 / number}%`;

    div.addEventListener("mouseenter", function (e) {
      div.style.backgroundColor = getRandomColor();
      // div.style.backgroundColor = "black";
    });
  }
};

const resizeHandler = () => {
  const columns = parseInt(resize());
  if (columns >= 1 && columns <= 100) {
    grid.innerHTML = "";
    createDiv(columns);
  } else {
    alert("Please enter a number between 1 and 100");
  }
};

resizeBtn.addEventListener("click", resizeHandler);
createDiv(10);

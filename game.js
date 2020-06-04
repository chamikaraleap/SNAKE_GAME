import {
  SNAKE_SPEEED,
  update as snakeUpdate,
  draw as snakeUDraw
} from "./snake.js";

import { update as foodUpdate, draw as foodDraw } from "./food.js";

let lastRenderTime = 0;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  window.requestAnimationFrame(main);
  const secondsFormLastRenderTime = (currentTime - lastRenderTime) / 1000;
  if (secondsFormLastRenderTime < 1 / SNAKE_SPEEED) return;
  lastRenderTime = currentTime;
  console.log("Render");

  update();
  draw();
}

function update() {
  snakeUpdate();
  foodUpdate();
}

function draw() {
  gameBoard.innerHTML = "";
  snakeUDraw(gameBoard);
  foodDraw(gameBoard);
}

window.requestAnimationFrame(main);

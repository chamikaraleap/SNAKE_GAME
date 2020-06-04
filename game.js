import {
  SNAKE_SPEEED,
  update as snakeUpdate,
  draw as snakeUDraw,
  getSnakeHead,
  snakeIntersection
} from "./snake.js";

import { update as foodUpdate, draw as foodDraw } from "./food.js";
import { outsideGrid } from "./grid.js";

let lastRenderTime = 0;
let gameOver = false;
const gameBoard = document.getElementById("game-board");

function main(currentTime) {
  if (gameOver) {
    if (confirm("You lost. Press ok to restart.")) {
      window.location = "/";
    }
    return;
  }
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
  checkDeath();
}

function draw() {
  gameBoard.innerHTML = "";
  snakeUDraw(gameBoard);
  foodDraw(gameBoard);
}

function checkDeath() {
  gameOver = outsideGrid(getSnakeHead()) || snakeIntersection();
}
window.requestAnimationFrame(main);

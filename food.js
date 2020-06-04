import { expandSnake, onSnake } from "./snake.js";
import { gridRandomPosition } from "./grid.js";

let food = getrandomFoodPosition();
const SNAKE_EXPANSION = 1;

export function update() {
  console.log(onSnake(food));
  if (onSnake(food)) {
    expandSnake(SNAKE_EXPANSION);
    food = getrandomFoodPosition();
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

function getrandomFoodPosition() {
  let newFoodPosition;
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = gridRandomPosition();
  }
  return newFoodPosition;
}

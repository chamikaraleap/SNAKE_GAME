import { expandSnake, onSnake } from "./snake.js";

let food = { x: 11, y: 10 };
const SNAKE_EXPANSION = 1;

export function update() {
  console.log(onSnake(food));
  if (onSnake(food)) {
    expandSnake(SNAKE_EXPANSION);
    food = { x: 5, y: 5 };
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement("div");
  foodElement.style.gridRowStart = food.y;
  foodElement.style.gridColumnStart = food.x;
  foodElement.classList.add("food");
  gameBoard.appendChild(foodElement);
}

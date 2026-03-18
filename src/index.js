import "./style.css";
import { Ship } from "./ship.js";
import { startGame } from "./app.js";
import { render } from "./view.js";
import { display, resetGame } from "./controller.js";

const { playerOne, playerTwo } = startGame();
display(playerOne, playerTwo);
resetGame();

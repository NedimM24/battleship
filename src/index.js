import "./style.css";
import { Ship } from "./ship.js";
import { startGame } from "./app.js";
import { render } from "./view.js";
import { display, resetGame } from "./controller.js";



function startNewGame(){
    const { playerOne, playerTwo } = startGame();
    display(playerOne, playerTwo);
}

startNewGame();

const resetBtn = document.querySelector('.reset-btn');
resetBtn.onclick = () => {
    startNewGame();
};
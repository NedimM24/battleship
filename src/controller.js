import { render } from "./view.js";

export function display(){
    render();

    //Playerboard dynamic click w event delegation
    const playerBoard = document.querySelector('.player-board');
    playerBoard.addEventListener("click", (e) => {
        if(e.target.classList.contains("player-cell")){
            e.target.style.backgroundColor = 'Green';
        }
    })

    //computer board dynamic click w event delegation
    const computerBoard = document.querySelector('.computer-board');
    computerBoard.addEventListener("click", (e) => {
        if(e.target.classList.contains("computer-cell")){
            e.target.style.backgroundColor = 'Green';
        }
    })

}


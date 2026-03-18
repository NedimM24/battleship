import { render } from "./view.js";

export function display(playerOne, playerTwo){
    render(playerOne, playerTwo);

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
            const row = Number(e.target.dataset.row);
            const col = Number(e.target.dataset.col)

            const shipAtCell = playerTwo.playerGameboard.board[row][col];

            playerTwo.playerGameboard.receiveAttack(row, col, shipAtCell);

            render(playerOne, playerTwo);
        }
    })

}


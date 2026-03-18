import { render } from "./view.js";

export function display(playerOne, playerTwo){
    let playerTurn = true;
    render(playerOne, playerTwo);

    //Playerboard dynamic click w event delegation
    const playerBoard = document.querySelector('.player-board');

   
    //computer board dynamic click w event delegation
    const computerBoard = document.querySelector('.computer-board');
    computerBoard.addEventListener("click", (e) => {
        if(!playerTurn) return;
        if(!e.target.classList.contains("computer-cell")) return; 
            const row = Number(e.target.dataset.row);
            const col = Number(e.target.dataset.col)

            const shipAtCell = playerTwo.playerGameboard.board[row][col];

            playerTwo.playerGameboard.receiveAttack(row, col, shipAtCell);

            render(playerOne, playerTwo);

            if(playerTwo.playerGameboard.allShipsSunk){
                alert("game over");
                return;
            }
            playerTurn = false;
        }
)

}


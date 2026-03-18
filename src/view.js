import { Ship } from "./ship";
export function render(playerOne, playerTwo){
    const playerBoard = document.querySelector(".player-board");
    const computerBoard = document.querySelector(".computer-board");

    playerBoard.innerHTML = "";
    computerBoard.innerHTML = "";

    renderBoard(playerBoard, playerOne.playerGameboard, true);
    renderBoard(computerBoard, playerTwo.playerGameboard, false);
    
}

function renderBoard(boardElement, gameBoard, showShips){
    //render the player board first
    
    for(let i = 0; i <100; i++){
        const cell = document.createElement('div');

        //Need to add cell positions
        const row = Math.floor(i / 10);
        const col = i % 10;

        cell.dataset.row = row;
        cell.dataset.col = col;

        cell.classList.add(boardElement.classList.contains('player-board') ? 'player-cell' : 'computer-cell')

        const boardValue = gameBoard.board[row][col];
        if(showShips && boardValue instanceof Ship){
            cell.classList.add('ship');
        }

        if(boardValue === 'hit'){
            cell.classList.add('hit')
        } else if (boardValue === 'miss'){
            cell.classList.add('miss');
        }
        boardElement.appendChild(cell);
     }
};

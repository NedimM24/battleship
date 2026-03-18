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

                // Computers attack now
                setTimeout(() => {
                computerAttack();
                render(playerOne, playerTwo);

                if(playerOne.playerGameboard.allShipsSunk){
                    alert("game over. Computer wins");
                    return;
                }
                playerTurn = true;

            }, 800);


        })

        function computerAttack(){
            const availableCell = [];
            for(let i = 0; i < 10; i++){
                for(let j = 0; j < 10; j++){
                    const cell = playerOne.playerGameboard.board[i][j];
                    if(cell !== 'hit' && cell !== 'miss'){
                        availableCell.push({row: i, col: j})
                    }
                }
            }

            const computerAttack = availableCell[Math.floor(Math.random() * availableCell.length)];
            const targetShip = playerOne.playerGameboard.board[computerAttack.row][computerAttack.col];
            playerOne.playerGameboard.receiveAttack(computerAttack.row, computerAttack.col, targetShip);           

        }

}


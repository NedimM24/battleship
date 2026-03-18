import { startGame } from "./app.js";
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

            playerTwo.playerGameboard.receiveAttack(row, col);
            render(playerOne, playerTwo);

            if(playerTwo.playerGameboard.allShipsSunk){
                alert("Game over. You win");
                return;
            }
            playerTurn = false;

                // Computers attack now
                setTimeout(() => {
                computerAttack();
                render(playerOne, playerTwo);

                if(playerOne.playerGameboard.allShipsSunk){
                    alert("Game over. Computer wins");
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
            
            playerOne.playerGameboard.receiveAttack(computerAttack.row, computerAttack.col);           

        }

}
//START A FRESH GAME
export function resetGame(){
    const resetBtn = document.querySelector('.reset-btn');
    resetBtn.addEventListener('click', () => {
        const {playerOne, playerTwo} = startGame();
        display(playerOne, playerTwo);
        
    })
}


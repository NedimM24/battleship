export function render(){

    //render the player board first
    const playerBoard = document.querySelector(".player-board");
    for(let i = 0; i <100; i++){
        let playerCell = document.createElement('div');
        playerCell.classList.add('player-cell');
        playerBoard.appendChild(playerCell)
        };

    //Render the computer board. 10 x 10 grid
    const computerBoard = document.querySelector(".computer-board");
    for(let i = 0; i <100; i++){
        let computerCell = document.createElement('div');
        computerCell.classList.add('computer-cell');
        computerBoard.appendChild(computerCell)
        };
}
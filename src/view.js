export function render(){

    //render the player board first
    const playerBoard = document.querySelector(".player-board");
    for(let i = 0; i <100; i++){
        let playerCell = document.createElement('div');
        playerCell.classList.add('player-cell');

        //Need to add cell positions
        const row = Math.floor(i / 10);
        const col = i % 10;

        playerCell.dataset.row = row;
        playerCell.dataset.col = col;

        playerBoard.appendChild(playerCell)
        };

    //Render the computer board. 10 x 10 grid
    const computerBoard = document.querySelector(".computer-board");
    for(let i = 0; i <100; i++){
        let computerCell = document.createElement('div');
        computerCell.classList.add('computer-cell');

        //Need to add cell positions
        const row = Math.floor(i / 10);
        const col = i % 10;

        computerCell.dataset.row = row;
        computerCell.dataset.col = col;

        computerBoard.appendChild(computerCell)
        };

    
}
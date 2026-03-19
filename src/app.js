import { Ship } from "./ship";
import { Player } from "./player";
import { Gameboard } from "./gameboard";

//function to randomly place the ships
function placeShipsRandomly(player){
  const shipLengths = [1, 2, 3, 4, 5]

  shipLengths.forEach((length) => {
    let shipPlaced = false;

    while(!shipPlaced){
      const direction = Math.random() < 0.5 ? "horizontal" : "vertical";
      const row = Math.floor(Math.random() * 10);
      const col = Math.floor(Math.random() * 10);

      const ship = new Ship(length);

      shipPlaced = player.playerGameboard.placeShip(row, col, direction, ship)
    }
  })
}

//Need to create start game function
//creates 2 new players w 10 x 10 boards
//place 5 ships (5 len, 4len, 3len, 2len, 1len)

export function startGame() {
  //Crete players. Sticking with a fixed 10 x 10 gameboard for this project
  const playerOne = new Player("real", 10, 10);
  const playerTwo = new Player("computer", 10, 10);

  placeShipsRandomly(playerOne);
  placeShipsRandomly(playerTwo);

  
  return {
    playerOne,
    playerTwo,
  };
}

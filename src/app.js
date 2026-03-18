import { Ship } from "./ship";
import { Player } from "./player";
import { Gameboard } from "./gameboard";


//Need to create start game function
//creates 2 new players w 10 x 10 boards
//place 5 ships (5 len, 4len, 3len, 2len, 1len)

export function startGame(){
    //Crete players. Sticking with a fixed 10 x 10 gameboard for this project
    const playerOne = new Player('real', 10, 10);
    const playerTwo = new Player('computer', 10, 10);

    //create 5 ships for each player
    let playerOneShipOne = new Ship(1);
    let playerOneShipTwo = new Ship(2);
    let playerOneShipThree = new Ship(3);
    let playerOneShipFour = new Ship(4);
    let playerOneShipFive = new Ship(5);

    //create 5 ships for each player
    let playerTwoShipOne = new Ship(1);
    let playerTwoShipTwo = new Ship(2);
    let playerTwoShipThree = new Ship(3);
    let playerTwoShipFour = new Ship(4);
    let playerTwoShipFive = new Ship(5);

    //Populate each player gameboard with ships
    //Player one
    playerOne.playerGameboard.placeShip(4, 4, 'vertical', playerOneShipOne);
    playerOne.playerGameboard.placeShip(3,0, 'vertical', playerOneShipTwo);
    playerOne.playerGameboard.placeShip(9,0, 'horizontal', playerOneShipThree);
    playerOne.playerGameboard.placeShip(6,2, 'horizontal', playerOneShipFour);
    playerOne.playerGameboard.placeShip(0, 9, 'vertical', playerOneShipFive);

    //Player 2
    playerTwo.playerGameboard.placeShip(4, 4, 'vertical', playerTwoShipOne);
    playerTwo.playerGameboard.placeShip(3,0, 'vertical', playerTwoShipTwo);
    playerTwo.playerGameboard.placeShip(9,0, 'horizontal', playerTwoShipThree);
    playerTwo.playerGameboard.placeShip(6,2, 'horizontal', playerTwoShipFour);
    playerTwo.playerGameboard.placeShip(0, 9, 'vertical', playerTwoShipFive);

    return{
        playerOne,
        playerTwo
    }
}


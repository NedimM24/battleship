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
    let playeOneShipOne = new Ship(1);
    let playeOneShipTwo = new Ship(2);
    let playeOneShipThree = new Ship(3);
    let playeOneShipFour = new Ship(4);
    let playeOneShipFive = new Ship(5);

    //create 5 ships for each player
    let playerTwoShipOne = new Ship(1);
    let playerTwoShipTwo = new Ship(2);
    let playerTwoShipThree = new Ship(3);
    let playerTwoShipFour = new Ship(4);
    let playerTwoShipFive = new Ship(5);

    //Populate each player gameboard with ships
    //Player one
    playerOne.playerGameboard.placeShip(4, 4, 'vertical', playeOneShipOne);

    
    

    return{
        playerOne,
        playerTwo
    }
}
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

    return{
        playerOne,
        playerTwo
    }
}
import { Ship } from "./ship.js";

export class Gameboard{
    constructor(columns, rows){
        this.columns = columns;
        this.rows = rows;

        //create an empty board
        this.board = [];

        for(let i = 0; i < this.rows; i++){
            const row = [];
            for(let j = 0; j < this.columns; j++){
                row.push(null);
            }
            this.board.push(row);
        }

    };

    //Gameboards should be able to place 
    //ships at specific coordinates by calling the ship factory or class.

    placeShip(x,y){

    }

}
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
    placeShip(x, y, direction, ship){
        const length = ship.length;
        //Checking bounds
        if(direction === 'vertical' && x + length > this.rows) {
            return false;
        }
        if(direction === 'horizontal' && y + length > this.columns){
            return false;
        }

        //checking for ship overlap
        for(let i = 0; i < length; i++){
            let row;
            let col;

            if(direction === 'vertical'){
                row = x + i;
                col = y;
            } else {
                row = x;
                col = y + i;
            }

            if(this.board[row][col] !== null){
                return false;
            }
        }

        //Place the ship
        // Iterate through the ships length
        for(let i = 0; i < length; i++){
            let row;
            let col;

            if(direction === 'vertical'){
                row = x + i;
                col = y;
                //HOIZONTAL
            } else {
                row = x;
                col = y + i;
              }
             this.board[row][col] = ship;
           }
         return true;
        }

        receiveAttack(coord1, coord2, ship){
            if(this.board[coord1][coord2] === 'hit' || 
               this.board[coord1][coord2] === 'miss' ){
                    return false; //cell already pressed or called on
                };
            if(this.board[coord1][coord2] !== null){
                this.board[coord1][coord2] = 'hit';
                ship.hit();
            } else {
                 this.board[coord1][coord2] = 'miss';
            }
        }
    };

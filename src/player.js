import { Gameboard } from "./gameboard";

export class Player{
    constructor(playerType, column, row){
        this.playerType = playerType;
        this.playerGameboard = new Gameboard(column, row);
    }
}
import { Gameboard } from "./gameboard";

export class Player{
    constructor(playerType, row, column){
        this.playerType = playerType;
        this.playerGameboard = new Gameboard(row, column);
    }
}
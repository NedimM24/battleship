import { Ship } from "./ship.js";

export class Gameboard {
  constructor(columns = 10, rows = 10) {
    this.columns = columns;
    this.rows = rows;
    this.numberOfShips = 0;
    this.sunkenShips = 0;
    this.allShipsSunk = false;

    //create an empty board
    this.board = [];

    for (let i = 0; i < this.rows; i++) {
      const row = [];
      for (let j = 0; j < this.columns; j++) {
        row.push(null);
      }
      this.board.push(row);
    }
  }

  //Gameboards should be able to place
  //ships at specific coordinates by calling the ship factory or class.
  placeShip(x, y, direction, ship) {
    const length = ship.length;
    //Checking bounds
    if (direction === "vertical" && x + length > this.rows) {
      return false;
    }
    if (direction === "horizontal" && y + length > this.columns) {
      return false;
    }

    //checking for ship overlap
    for (let i = 0; i < length; i++) {
      let row;
      let col;

      if (direction === "vertical") {
        row = x + i;
        col = y;
      } else {
        row = x;
        col = y + i;
      }

      if (this.board[row][col] !== null) {
        return false;
      }
    }

    //Place the ship
    // Iterate through the ships length
    for (let i = 0; i < length; i++) {
      let row;
      let col;

      if (direction === "vertical") {
        row = x + i;
        col = y;
        //HOIZONTAL
      } else {
        row = x;
        col = y + i;
      }
      this.board[row][col] = ship;
    }
    this.numberOfShips++;
    return true;
  }

  receiveAttack(row, column) {
    const cell = this.board[row][column];

    //check if cell has been clicked
    if (cell === "hit" || cell === "miss") {
      return false;
    }

    if (cell instanceof Ship) {
      cell.hit();
      this.board[row][column] = "hit";

      //check if ship is sunk
      if (cell.isSunk()) {
        this.sunkenShips++;

        if (this.numberOfShips === this.sunkenShips) {
          this.allShipsSunk = true;
        }
      }
    } else {
      this.board[row][column] = "miss";
    }
  }
}

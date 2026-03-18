import { startGame } from "../app.js";
import { Ship } from "../ship.js";

let testGame;
beforeEach(() => {
  testGame = startGame();
});

// For now just populate each player’s Gameboard with predetermined coordinates.
test("Start new game, passes if a computer and real player are created", () => {
  expect(testGame.playerOne.playerType).toBe("real");
  expect(testGame.playerTwo.playerType).toBe("computer");
});

//test ship placement
test("Set player ship", () => {
  const playerOneShipOne = new Ship(2);
  const playerTwoShipOne = new Ship(2);
  testGame.playerOne.playerGameboard.placeShip(
    3,
    3,
    "vertical",
    playerOneShipOne,
  );
  testGame.playerTwo.playerGameboard.placeShip(
    3,
    3,
    "vertical",
    playerTwoShipOne,
  );
  expect(testGame.playerOne.playerGameboard.board[3][3]).toBe(playerOneShipOne);
  expect(testGame.playerOne.playerGameboard.board[4][3]).toBe(playerOneShipOne);
});


import { startGame } from "../app.js";

let testGame;
beforeEach(() => {
  testGame = startGame();
});

// For now just populate each player’s Gameboard with predetermined coordinates.
test('Start new game, passes if a computer and real player are created', () => {
    expect(testGame.playerOne.playerType).toBe('real');
    expect(testGame.playerTwo.playerType).toBe('computer');
});
import { Ship } from "./ship";
import { Player } from "./player";
import { Gameboard } from "./gameboard";

// For now just populate each player’s Gameboard with predetermined coordinates.
test('Start new game, passes if a computer and real player are created', () => {
    startGame();
    expect(playerOne.playerType).toBe('real');
    expect(playerTwo.playerType).toBe('computer');
});
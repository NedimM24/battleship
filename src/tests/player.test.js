import { Gameboard } from "../gameboard"
import { Player } from "../player";

test('Create a player object', () => {
    const player = new Player('real', 3, 3);
    expect(player.playerType).toBe('real');
    expect(player.playerGameboard.board).toEqual([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
});
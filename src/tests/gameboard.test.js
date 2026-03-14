import { Ship } from "../ship.js";
import { Gameboard } from "../gameboard.js";

test('Create a Gameboard obj', () => {
    const newGameboard = new Gameboard(3,3);
    expect(newGameboard.board).toEqual([
        [null, null, null], 
        [null, null, null], 
        [null,null,null]
    ]);
});
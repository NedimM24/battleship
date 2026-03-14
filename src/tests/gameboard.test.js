import { Ship } from "../ship.js";
import { Gameboard } from "../gameboard.js";

//Create a gameboard object
test('Create a Gameboard obj', () => {
    const newGameboard = new Gameboard(3,3);
    expect(newGameboard.board).toEqual([
        [null, null, null], 
        [null, null, null], 
        [null,null,null]
    ]);
});

let newGameboard;
beforeEach(() => {
    newGameboard = new Gameboard(4,4);
});


test("Vertical ship out of bounds returns false", () => {
    const testShip = new Ship(2);
    expect(newGameboard.placeShip(3, 3, 'vertical', testShip)).toBe(false);
})

test("Vertical ship in bounds returns true", () => {
    const testShip = new Ship(2);
    expect(newGameboard.placeShip(1, 1, 'vertical', testShip)).toBe(true);
})

test("Horizontal ship out of bounds returns false", () => {
    const testShip = new Ship(2);
    expect(newGameboard.placeShip(3, 3, 'horizontal', testShip)).toBe(false);
})

test("Horizontal ship in bounds returns true", () => {
    const testShip = new Ship(2);
    expect(newGameboard.placeShip(1, 1, 'horizontal', testShip)).toBe(true);
})
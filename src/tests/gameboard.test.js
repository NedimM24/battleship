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

//Testing bounds
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

//Testing ship overlap
test('If ships collide, return false', () => {
    const testShip = new Ship(2);
    const newShip = new Ship(2,2)
    newGameboard.placeShip(1, 1, 'vertical', testShip);
    expect(newGameboard.placeShip(1, 1, 'vertical', newShip)).toBe(false);
})

//Testing ship placement
test('Returns true if ship is placed correctly', () => {
    const testShip = new Ship(2);
    newGameboard.placeShip(1, 1, 'vertical', testShip);
    expect(newGameboard.board[1][1]).toBe(testShip);
    expect(newGameboard.board[2][1]).toBe(testShip);
})
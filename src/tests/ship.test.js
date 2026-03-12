import { Ship } from "../ship.js";

//test creating an object from the ship class
test('Creates a Ship object with a length of n, timesHit of 0, and sunk = false', () => {
    const testShip = new Ship(5);
    expect(testShip.length).toBe(5);
    expect(testShip.timesHit).toBe(0);
    expect(testShip.sunk).toBe(false);
});

//testing that timesHit will incerase by one once hit() function is called
test('Increases the timesHit attribute by 1', () => {
    const testShip = new Ship(5);
    testShip.hit();
    expect(testShip.timesHit).toBe(1);
})

//testing if ship is sunk
test('Ship is not sunk before hit', () => {
    const testShip = new Ship(2);
    expect(testShip.isSunk()).toBe(false);
});

test('Ship is sunk eventually', () => {
    const testShip = new Ship(2);
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
})
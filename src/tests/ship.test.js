import { Ship } from "../ship.js";

//test creating an object from the ship class
test('Creates a Ship object with a length of n, timesHit of 0, and isSunk = false', () => {
    const testShip = new Ship(5);
    expect(testShip.length).toBe(5);
    expect(testShip.timesHit).toBe(0);
    expect(testShip.isSunk).toBe(false);
});
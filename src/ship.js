export class Ship{
    constructor(length){
        this.length = length;
        this.timesHit = 0;
        this.sunk = false;
    };

    // function that increases the number of ‘hits’ in your ship.
    hit(){
        if(this.sunk === true){
            return;
        }
        this.timesHit++;
    }

    // calculates whether a ship is considered sunk based on its length 
    // and the number of hits it has received.
    isSunk(){
        if(this.timesHit === this.length){
            return true;
        } else {
            return false;
        }
    };
};
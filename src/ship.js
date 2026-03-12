export class Ship{
    constructor(length){
        this.length = length;
        this.timesHit = 0;
        this.isSunk = false;
    };

    // function that increases the number of ‘hits’ in your ship.
    hit(){
        if(this.isSunk === true){
            return;
        }
        this.timesHit++;
    }
};
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


    
};
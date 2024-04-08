class Vechile{
    constructor(color, currSpeed, maxSpeed)
    {
        this.color=color;
        this.currSpeed=currSpeed;
        this.maxSpeed=maxSpeed;
    }
    accelerate(amount)
    {
        this.currSpeed=this.amount;
    }

    move()
    {
        console.log("This car is moving in this speed" + this.currSpeed);
    }
    brake(speed)
    {
        if(this.currSpeed > this.maxSpeed)
        {
            console.log("You cannot brake this car");
        }
        else{
            this.currSpeed=0;
        }
    }
}


class MotorCycle extends Vechile{

    constructor(color, currSpeed, maxSpeed, fuel)
    {
        super(color, currSpeed, maxSpeed);
        this.fuel=fuel;
    }

    doWheelie()
    {
        console.log("This wheelie is moving in this speed" + this.currSpeed);
    }
}

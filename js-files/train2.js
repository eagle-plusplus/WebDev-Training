/*const car ={
    model:"mustang",
    color:"red",
    year:2023,

    drive : function(){
        console.log(`you drive ${this.model}`);
    },
    brake : function(){
        console.log("you brake");
    }
}

console.log(car.model);

car.drive();

class Player{
    //score = 0;

    static numP = 0;

    constructor(score){
        this.score = score;
        Player.numP++;
    }

    pause(){
        console.log(`${this.score} points`);
    }

    static begin(){
        console.log("new game");
    }

}

class Hero extends Player{
    lol = true;

    constructor(score, lol){
        super(score);
        this.lol = lol;
    }

    play(){
        console.log("kodpcsk");
    }
}

const player1 = new Player(67);
const player2 = new Player()

const k = new Hero(34, false);

player1.pause();
Player.begin();

k.pause();
k.play();
console.log(k.lol);
console.log(k.score);


console.log(Player.numP);*/

class Car{
    constructor(power){
        this._power = power;
    }

    get power(){
        return `${this._power} hp`;
    }

    set power(x){
        this._power = x;
    }
}

let car1 = new Car(800);
let car2 = new Car(8040);
let car3 = new Car(8030);

const cars = [car1, car2, car3];

//const car2 = new Car(789);

//car1 = car2;

//car1.power = 900;

console.log(...cars);

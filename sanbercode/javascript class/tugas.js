class Animal {
    constructor(name) {
        this.animalName = name
        this.legs = 4
        this.cold_blooded = false
    }
    get name() {
        return this.animalName
    }
}

var sheep = new Animal("shaun");

console.log(sheep.name) // "shaun"
console.log(sheep.legs) // 4
console.log(sheep.cold_blooded) // false
console.log(`=====================================`)

class Frog extends Animal {
    constructor(animalName) {
        super(animalName)
    }
    jump = () =>
        console.log(`hop hop`)

}

class Ape extends Animal {
    constructor(animalName) {
        super(animalName)
    }
    yell = () =>
        console.log(`Auooo`)

}

var sungokong = new Ape("kera sakti")
sungokong.yell() // "Auooo"

var kodok = new Frog("buduk")
kodok.jump() // "hop hop" 

console.log(`=========================`)

class Clock {
    constructor({ template }) {
        this.template = template
        this.timer = 0
    }
    render = () => {
        var date = new Date();

        var hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        var mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;

        var secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;

        var output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);

        console.log(output);
    }

    stop = () => {
        clearInterval(this.timer)
    }
    start = () => {
        this.render()
        this.timer = setInterval(this.render, 1000)
    }
}
var clock = new Clock({ template: 'h:m:s' });
clock.start();

# [Ninja](https://login.codingdojo.com/m/130/6406/45731)

- [file](ninja.js)

```js
class Ninja {
    constructor(name, health, speed = 3, strength = 3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
  }

    sayName(){
        console.log(this.name)
    }

    showStats(){
        console.log(` name: ${this.name}\n health: ${this.health}\n speed: ${this.speed}\n strength: ${this.strength}
        `)
    }

    drinkShake(){
        this.health += 10
        console.log(`Health is now ${this.health}`)
    }
}

const n = new Ninja("Tyler", 10)
const n1 = new Ninja("Joe", 5, 7,8)

n.showStats()
n.sayName()
n.showStats()
n.drinkShake()
```
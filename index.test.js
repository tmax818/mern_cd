const {Ninja} = require('./assignments/practice/ninja/ninja')
console.log(Ninja)

describe("Ninja", () =>{

    beforeEach(()=>{
        ninja = new Ninja()
    })

    test("class should be defined", ()=>{
        expect(ninja).toBeDefined();
        expect(ninja).toBeInstanceOf(Ninja)
    }, "You need to define a Ninja class!")
})
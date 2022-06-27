const {Ninja} = require('./ninja')
const {Sensei} = require('./sensei')


describe("Ninja", () =>{

    beforeEach(()=> {
        ninja1 = new Ninja("Tyler")
        ninja2 = new Ninja("Ed", 10)
        ninja3 = new Ninja("SeeSo", 99, 10, 56)
    })

    test("class should be defined", ()=>{
        expect(ninja1).toBeDefined();
        expect(ninja1).toBeInstanceOf(Ninja)
    }, "You need to define a Ninja class!")

    test("ninja should have a name", () => {
        expect(ninja1.name).toBe("Tyler")
    })

    test("ninja should have a health", () => {
        expect(ninja2.health).toBe(10)
    })
    
    test("ninja should have a speed with a default value of 3.", () => {
        expect(ninja1.speed).toBe(3)
    })
    
    test("ninja should have a speed that can be set", () => {
        expect(ninja3.speed).toBe(10)
    })

    test("ninja should have a strength with a default value of 3.", () => {
        expect(ninja1.strength).toBe(3)
    })
    
    test("ninja should have a strength that can be set", () => {
        expect(ninja3.strength).toBe(56)
    })

    test("ninja should have a sayName method", () => {
        expect(ninja1.sayName).toBeDefined();
    })
    test("ninja should have a sayName method", () => {
        expect(ninja1.sayName).toBeDefined();
    })
    
    test("sayName method should console.log the ninja's name", () => {
        const logSpy = jest.spyOn(console, 'log');
        const ninja = new Ninja("Tyler")    
        ninja.sayName()      
        expect(logSpy).toHaveBeenCalledWith(ninja.name);
    });
        
    test("showStats method should console.log the ninja's name", () => {
        const logSpy = jest.spyOn(console, 'log');  
        ninja1.showStats()      
        expect(logSpy).toHaveBeenCalledWith("Tyler");
    });
    
    test("showStats method should console.log the ninja's strength", () => {
        const logSpy = jest.spyOn(console, 'log');  
        ninja1.showStats()      
        expect(logSpy).toHaveBeenCalledWith(3);
    });

    test("showStats method should console.log the ninja's health", () => {
        const logSpy = jest.spyOn(console, 'log');  
        ninja3.showStats()      
        expect(logSpy).toHaveBeenCalledWith(99);
    });

    test("showStats method should console.log the ninja's speed", () => {
        const logSpy = jest.spyOn(console, 'log');  
        ninja3.showStats()      
        expect(logSpy).toHaveBeenCalledWith(10);
    });
})

describe('Sensei', () => {

    beforeEach(()=> {
        sensei1 = new Sensei()
    })
    test("should inherit from ninja", ()=>{
        expect(ninja1).toBeInstanceOf(Ninja)
    })
})
import {} from "./index.js"

describe("Testing the testing", ()=>{{
    it("should do something", ()=>{
        const logSpy = jest.spyOn(console, 'log');

    })
}})

test("sayName method should console.log the ninja's name", () => {
    const logSpy = jest.spyOn(console, 'log');
    const ninja = new Ninja("Tyler")    
    ninja.sayName()      
    expect(logSpy).toHaveBeenCalledWith(ninja.name);
});


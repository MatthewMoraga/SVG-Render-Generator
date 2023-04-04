// importing the shapes construct to implement testing

const {Square, Triangle, Circle} = require("./shapes.js")

// using describe to test a suite that checks to see if the shape parameters when 
// expect matches what is being returned and also checks color using blue as the test color
// this helps to make sure that the code is written correctly when imported and the shape is rendered properly

describe("Square", () => {
    test("rendered", () => {
        const shape = new Square();
        var color = ("green")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<rect x="50" y="25" height="200" width="200" fill="${color}" />`)
    })
})

describe("Triangle", () => {
    test("rendered", () => {
        const shape = new Triangle();
        var color = ("green")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0"  fill="${color}" />`)
    })
})

describe("Circle", () => {
    test("rendered", () => {
        const shape = new Circle();
        var color = ("green")
        shape.setColor(color)
        expect(shape.render()).toEqual(`<circle height="100%" width="100%" cx="150" cy="100" r="80" fill="${color}" />`)
    })
})
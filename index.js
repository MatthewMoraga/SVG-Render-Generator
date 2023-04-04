// importing required packages

const fs = require("fs")
const inquirer = require("inquirer")
const {Square, Triangle, Circle} = require("./lib/shapes.js")

// class contructor to set the shape up itself
// based on what the user inputs

class SvgShape {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    // render method
    render() {

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeEl}${this.textEl}</svg>`
    }

    // sets up the text based on what the user inputs
    setTextElement(text, color){
        this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    // sets up the shape based on what the user inputs
    setShapesElement(shape) {
        this.shapeEl = shape.render()
    }
}

// array of question for inquirer prompt

const shapesQuestions = [
    {
        type: "input",
        name: "text",
        message: "enter text"
    },
    {
        type: "input",
        name: "text-color",
        message: "enter a color for your text"
    },
    {
        type: "input",
        name: "shapes-color",
        message: "enter a color for your shape"
    },
    {
        type: "list",
        name: "shapes-choice",
        message: "choose a shape",
        choices: ["Square", "Triangle", "Circle"]
    }
];

// file write functon that logs the shape data + fileName 
// and returns an error if there is none

function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName +"]")
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
        console.log("file written")
    })
}

// setting up an async function to make the inquire prompt await
// so that all of the choices are made and the render excutes after
// so that the prompt function isn't skipped over


async function init() {

    // vars that define what the will be written in the file and file to be written to

    var svgString = "";
    var svgFile = "./logo.svg";

    // gets the answers of the array above

    const shapesAnswers = await inquirer.prompt(shapesQuestions)


        // sets what text will be displayed in the svg up to a certain text length
        // using the and&& logic operator
        var userText = "";
            if(shapesAnswers.text.length > 0 && shapesAnswers.text.length < 5) {
                userText = shapesAnswers.text

            } else {

                console.log("error!")
            return;
            }

            // sets up these variables to be whatever the user inputs
    
            fontColor = shapesAnswers["text-color"]
            shapesColor = shapesAnswers["shapes-color"]
            shapesChoice = shapesAnswers["shapes-choice"]
            
            // sets up how the shape will render and makes a new shape object

            let shapeRender;

            // sets up the shape based on what the user inputs
            // using an or|| operator and then creates a new shape object
            // since the shape choice is using a list type from the prompt
            // also console logs the user choice


            if (shapesChoice === "Square" || shapesChoice === "square") {
                shapeRender = new Square();
                console.log("square was picked")
            }
            else if (shapesChoice === "Triangle" || shapesChoice === "triangle") {
                shapeRender = new Triangle();
                console.log("rectangle was picked");
            }
            else if (shapesChoice === "Circle" || shapesChoice === "circle") {
                shapeRender = new Circle();
                console.log("circle was picked")
            }
            else {
                console.log("error!")
            }

            // sets the color of the shape to whatever the user inputs as a string
            shapeRender.setColor(shapesColor)

            // makes a new svg based on the user inputs which comes from the SvgShape constuctor at the top
            // which are the values passed through from the variables seclard above
            

            var svg = new SvgShape()
            svg.setTextElement(userText, fontColor)
            svg.setShapesElement(shapeRender)
            svgString = svg.render();

            // calling the writeToFile function and passing in the title and the file to write
            // after the user enters all of the prompts

            writeToFile(svgFile, svgString)

            
}
init()
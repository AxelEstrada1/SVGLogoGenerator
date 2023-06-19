const fs = require('fs');
const { Circle, Triangle, Square, SVG } = require('./lib/shapes');
const inquirer = require('inquirer');

const questions = [
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['Circle', 'Triangle', 'Square'],
    },
  
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Type in a color, or hexadecimal number for color, that you want the shape to be:',
    },
  
    {
      type: 'input',
      name: 'text',
      message: 'Enter UP TO three characters to display inside of the shape:',
      validate: (input) => {
        if (input.length > 3) {
          return 'Your input must be 3 characters or less!'
        }
        
        return true;
      },
    },
  
    {
      type: 'input',
      name: 'textColor',
      message: 'Type in a color, or hexadecimal number for color, that you want the text inside to be:',
    },
  ];
  
  
  function writeToFile(fileName, data) {
    console.log("Writing [" + data + "] to file [" + fileName + "]")
    fs.writeFile(fileName, data, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Congratulations, you have Generated a logo.svg!");
    });
  }
  
  
  async function init() {
    console.log("Initializing");
    var svgString = "";
    var svgFile = "logo.svg";
  
    
    const answers = await inquirer.prompt(questions);
  
   
    var userText = "";
    if (answers.text.length > 0 && answers.text.length < 4) {
      
      userText = answers.text;
    } else {
      
      console.log("Invalid user text field detected! Please enter 1-3 Characters, no more and no less");
      return;
    }
    console.log("User text: [" + userText + "]");
    
    userShapeType = answers.shape;
    console.log("User entered shape = [" + userShapeType + "]");
    userFontColor = answers.textColor
    console.log("User font color: [" + userFontColor + "]");
    
    userShapeColor= answers.shapeColor;
    console.log("User shape color: [" + userShapeColor+ "]");
    
  
  
    
    let userShape;
    if (userShapeType === "Square" || userShapeType === "square") {
      userShape = new Square();
      console.log("User selected Square shape");
    }
    else if (userShapeType === "Circle" || userShapeType === "circle") {
      userShape = new Circle();
      console.log("User selected Circle shape");
    }
    else if (userShapeType === "Triangle" || userShapeType === "triangle") {
      userShape = new Triangle();
      console.log("User selected Triangle shape");
    }
    else {
      console.log("Invalid shape!");
    }
    userShape.setColor(userShapeColor);
  
    
    var svg = new SVG();
    svg.setTextElement(userText, userFontColor);
    svg.setShapeElement(userShape);
    svgString = svg.render();
  
    
    console.log("Displaying shape:\n\n" + svgString);
    console.log("Shape generation complete!");
    console.log("Writing shape to file...");
    writeToFile(svgFile, svgString);
  }
  init();
  
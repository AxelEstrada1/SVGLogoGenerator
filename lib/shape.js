class Shape{
  constructor(){
      this.color = "";
  }
  setColor(color){
      return this.color = color
  }
  //pass fill//
  
  }
  
  
   class Circle extends Shape{
  
   
  render(){
      return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
  }
  }
  
  
   class Triangle extends Shape{
  constructor() {
      super()
  }
          render(){
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
          }
  }
  
  
   class Square extends Shape{
  constructor(){
      super()
  }
      render(){
          return `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
      }
  }
  
   class SVG {
      constructor() {
          this.shapeElement = '';
          this.textElement = '';
      }
  
      render() {
          return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">${this.shapeElement} ${this.textElement} </svg>`;
      }
          setText(text,color){
          this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
      }
      setShape(shape){
          this.shapeElement = shape.render()
  
      }
  };
  module.exports = {
  Triangle, Square, Circle, SVG
  }
// setting a class constructor for the shapes

class Shapes {
    constructor() {
        this.color = "";
    }
    setColor(color) {
        this.color = (color);
    }
}

// objects that instantiate from the parent constructor and extend
// with a return render based on the shape it will render

class Square extends Shapes {
    render() {
        return `<rect x="50" y="25" height="200" width="200" fill="${this.color}" />`
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon height="100%" width="100%" points="0,200 300,200 150,0"  fill="${this.color}" />`
    }
}

class Circle extends Shapes {
    render() {
        return `<circle height="100%" width="100%" cx="150" cy="100" r="80" fill="${this.color}" />`
    }
}

// setting up the export for the shapes parent constructor

module.exports = {Square, Triangle, Circle}
class Circle{
    constructor(radius){
        this.radius =radius
    }

    get diameter(){
        return 2 * this.radius
    }

    get circumference(){
        return 2 * Math.PI * this.radius
    }

    get area(){
        return Math.PI * this.radius * this.radius;
    }

    set diameter(newDiameter){
        this.radius = newDiameter / 2
    }
    set circumference(newCircumference){
        this.diameter = newCircumference / Math.PI
    }
}


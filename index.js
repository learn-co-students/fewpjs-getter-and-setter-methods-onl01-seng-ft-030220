class Circle{
    constructor(radius) {
        this.radius = radius
    }
    get diameter() {
        return this.radius*2
    }
    get circumference() {
        return (Math.PI)*this.diameter
    } 
    get area() {
        return (Math.PI)*this.radius**2
    }
    set diameter(diameter) {
        this.radius = diameter/2
    }
    set circumference(circumference) {
        this.radius = circumference/(2*Math.PI)
    } 
}
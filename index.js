const pi = Math.PI

class Circle {
    constructor(radius){
        this.radius = radius 
    }

    get diameter(){
        return this.radius * 2
    }

    get circumference(){
        return this.radius * 2 * pi
    }

    get area(){
       return pi * ( this.radius ** 2)
    }

    set diameter(d){
        this.radius = d / 2
    }

    set circumference(c){
        this.radius = (c / 2) / pi
    }

    set area(a){
        this.radius = Math.sqrt(a / pi)
    }
    
}
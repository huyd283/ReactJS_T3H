class Circle{
    constructor(radius ,color){
        this.radius = radius;
        this.color = color;
    }
    get Radius(){
        return this.radius;
    };
    get Area(){
        let s = 3.14 * this.radius *this.radius;
        return s.toFixed(2);
    };
} ;
//1
let Circle2 = new Circle(3, 'black');

//2
console.log('radius Circle :',Circle2.radius);

//3
console.log('S Circle: ',Circle2.Area);

//4
class Cylinder extends Circle{
    constructor(radius, color, height){
        super(radius, color);
        this.height = height;
    }
    get Height(){
        return this.height;
    }
    get Volume(){
        // let v = this.Area()* this.height ;
        return this.Area *this.height;
    }

}

//5
let Cylinder2 = new Cylinder(5, 'red', 4);

//6 
console.log('radius Cylinder2: ',Cylinder2.radius);
console.log('Color Cylinder2: ',Cylinder2.color);
console.log('Area Cylinder2: ',Cylinder2.Area);
console.log('Volume Cylinder2: ',Cylinder2.Volume);


 


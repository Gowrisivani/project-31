class Plinko{
    constructor(x,y){

    var options={

        isStatic:false,

        restitution:0.5,

        friction:0,

        density:1.2
        
    }
    this.x=x;

    this.y=y;

    this.radius=10;

    this.body=Bodies.circle(this.x,this.y,10,options);

    World.add(world,this.body);

    }
    display(){

        push();

        translate(this.body.position.x,this.body.position.y);

        fill("red");

        ellipseMode(RADIUS);

        ellipse(0,0,this.radius,this.radius);

        pop();

        
    }
}
const Engine = Matter.Engine;

const World= Matter.World;

const Bodies = Matter.Bodies;

var engine,world;

var division1,division2,division3,division4,division5,division6;

var particles;

var plinkos;

var ground;

var particles = [];

var plinkos = [];

var divisions = [];

var divisionHeight=300;

function preload() 
{

}

function setup() {

  var canvas = createCanvas(480,700);

  engine=Engine.create();

  world=engine.world;
  
   //make the bodies

  ground = new Ground(600,height,100,20);

  for (var x=0;x<=width; x=x+80)
  {
    divisions.push(new Divisions(x,height,150,20));
  }

  for (var x=40;x<=width-10; x=x+50)
  {
    plinkos.push(new Plinko(x,100));
    plinkos.push(new Plinko(x,250));
  }

  for (var x=15;x<=width-10; x=x+50)
  {
    plinkos.push(new Plinko(x,175));
    plinkos.push(new Plinko(x,325));
  }
}

function draw() {

  background("pink");  

  Engine.update(engine);
  
  ground.display();

  for (var i = 0; i < plinkos.length; i++)
  {
    plinkos[i].display();
  }

  if (frameCount % 90 === 0) 
  { particles.push(new Particle(random(width / 2 - 100, width / 2 + 100), 30));
   } 
   
   for (var i = 0; i < particles.length; i++) 
   { particles[i].display(); 
  }

  for (var j = 0; j<particles.length; j++) 
 {
   particles[j].display();
 }
  for (var k = 0; k < divisions.length; k++)
 {
   divisions[k].display();
 }

 drawSprites();
}
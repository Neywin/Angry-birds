const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var object;
var box1, box2, box3, box4, pig1, pig2, log1, log2, bird1, ground1;

function setup() {

  createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new box(700,350,70,70);
  ground1 = new ground(600,380,1200,15);
  box2 = new box(920,350,70,70);
  pig1 = new pig(810,350,50,50);
  log1 = new log(810,260,300,15,PI);
  bird1 = new bird(50,50,50,50);
}


function draw() {
  background(255,255,255);  

  Engine.update(engine);
  box1.display();
  ground1.display();
  box2.display();
  pig1.display();
  log1.display();
  bird1.display();
 
  drawSprites();
}
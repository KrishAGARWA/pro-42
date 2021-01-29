
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var umb
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here...........

umb=new Umb(300,300)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
umb.display()


  drawSprites();
 
}




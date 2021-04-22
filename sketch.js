
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var box1,ground,ball,backgroundImg;
function preload()
{
	backgroundImg=loadImage("sprites/background-clipart-2.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
box1=createSprite(620,680,200,20)
box1=createSprite(710,640,20,100)
box1=createSprite(520,640,20,100)
ground=new Ground(600,height,800,700)
ball=new Ball(100,100);
	Engine.run(engine);
  
}


function draw() {
	background(backgroundImg);
	Engine.update(engine);
	ball.display();
  ground.display();
  drawSprites();
 
}





const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
var onoff

function preload()
{
	offImage = loadImage("off.png");
	onImage = loadImage("on.png");
}

function setup() {
	createCanvas(1535,752);
	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	onoff=createSprite(750, 350, 100, 100);
	onoff.addImage(offImage);
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  keyPressed();
  keyPressed2()
  drawSprites();

}
function keyPressed() {
if (keyCode === DOWN_ARROW) {
 background(399);
 onoff.addImage(onImage);
}
}
function keyPressed2() {
	if (keyCode === UP_ARROW) {
	 background(0);
	 onoff.addImage(offImage);
	}
	}
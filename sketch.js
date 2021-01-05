
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine;
var paper;
var dustBin1, dustBin2, dustBin3;
var ground;
function preload()
{
	dustbinimage = loadImage('dustbingreen.png');

}

function setup() {
	var canvas = createCanvas(1200, 600);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	dustbin1 = new Box(1100,495,150,15);
	dustbin2 = new Box(1185,420,15,170);
	dustbin3 = new Box(1015,420,15,170);
	
	ground = new Ground(700,550,1400,30);
	
	paper = new Paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,237,227);
	Engine.update(engine);
	
	
	paper.display();
	ground.display();
	dustbin3.display();
	dustbin1.display();
	dustbin2.display();
	image(dustbinimage,1000,330,200,200);
	
 
}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});

		}
	}
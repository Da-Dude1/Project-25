
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1,ground,bottom,side,side1,img

function preload()
{
	img=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(width/2,680,800,10)
	
	paper1= new Paper(20,650,70,70)
	bottom= new Bin(600,660,200,20)
	side= new Bin(490,620,20,100)

	side1=new Bin(700,620,20,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
 
  
  paper1.display()
  ground.display()
  bottom.display()
  side1.display()
  side.display()
  imageMode(CENTER)
  image(img,600,600,200,100)
  keyPressed()
  drawSprites();
 
}

function keyPressed(){
	if(keyDown(UP_ARROW)){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85})

	}
}




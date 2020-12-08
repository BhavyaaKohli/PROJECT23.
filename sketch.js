var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	var option = {
		isStatic : false
	  }
	
	  var bounce = {
		restitution :  -1
	  }
	packageSprite=createSprite(width/2, 80, 10,10,option);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	box1Sprite = createSprite(400,649,200,20)
	box1Sprite.shapeColor=color("red")

	box2Sprite = createSprite(300,610,20,100)
	box2Sprite.shapeColor=color("red")

	box3Sprite = createSprite(510,610,20,100)
	box3Sprite.shapeColor=color("red")

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle( width/2 , 200 , 5 , {restitution: -0.8, isStatic:true});
	World.add(world, packageBody);
	packageBody.setScale = 1;

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} , bounce);
 	World.add(world, ground);
  
	 box1 = Bodies.rectangle( 400,649,200,20, {isStatic:true} , bounce)
	World.add(world,box1)
	
	box2 = Bodies.rectangle(300,610,20,100, {isStatic:true} , bounce)
	World.add(world,box1)
	

	box3 = Bodies.rectangle(510,610,20,100, {isStatic:true} , bounce)
	World.add(world,box1)
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
   Matter.Body.setStatic (packageBody , false,);
 
    
  }
}




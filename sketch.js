const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball,log,log1,log2,log3;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;
ball = new Ball(200,300,40,40)
ground = new Ground(600,600,1600,40)
log1 = new Log(800,340,140,PI/2)
log2 = new Log(950,140,140,PI/2)
log3 = new Log(850,500,40,PI)

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  
  background(0);
  
  Engine.update(engine)
  ground.display();
  ball.display();
  log1.display();
  log2.display();
 log3.display();
 
}



function keyPressed(){
	if(keyCode=== UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85})
	}
}

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var world, engine
var ground, tree, boy, stone, mango1, mango2, elasticBand

function preload()
{
	
}

function setup() {
	createCanvas(1500, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
ground = new Ground(750, 990, 1500, 30)
tree = new Tree(700, 100, 800, 900)
boy = new Boy(100, 600, 400, 500)
stone = new Stone(110, 660, 100, 100)
mango1 = new Mango(1150, 200, 100, 100)
mango2 = new Mango(1050, 250, 100, 100)
mango3 = new Mango(1250, 250, 100, 100)
mango4 = new Mango(1150, 300, 100, 100)
mango5 = new Mango(1070, 360, 100, 100)
mango6 = new Mango(950, 360, 100, 100)
mango7 = new Mango(1250, 360, 100, 100)
mango8 = new Mango(1350, 360, 100, 100)
mango9 = new Mango(850, 400, 100, 100)
mango10 = new Mango(900, 500, 100, 100)
mango11 = new Mango(1050, 500, 100, 100)
mango12 = new Mango(1170, 450, 100, 100)
mango13 = new Mango(1300, 450, 100, 100)
mango14 = new Mango(1400, 450, 100, 100)
slingShot = new SlingShot(stone.body, {x:110, y:660})


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  ground.display();
  tree.display();
  boy.display();
  stone.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  mango13.display();
  mango14.display(); 
  slingShot.display();
  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  detectCollision(stone, mango7);
  detectCollision(stone, mango8);
  detectCollision(stone, mango9);
  detectCollision(stone, mango10);
  detectCollision(stone, mango11);
  detectCollision(stone, mango12);
  detectCollision(stone, mango13);
  detectCollision(stone, mango14);

}

function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
  }
  
  function mouseReleased() {
    slingShot.fly();
  }
function detectCollision(stone, mango) {
  mangoBodyPosition = mango.body.position
  stoneBodyPosition = stone.body.position

  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 if(distance<-mango.r + stone.r) {
   Matter.Body.setStatic(mango.body,false)
 }
}

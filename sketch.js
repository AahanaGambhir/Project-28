
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
mango1 = new Mango(1100, 150, 100, 100)
mango2 = new Mango(1000, 200, 100, 100)
mango3 = new Mango(1200, 200, 100, 100)

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

}




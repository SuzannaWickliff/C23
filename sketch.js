const Engine = Matter.Engine;
const World = Matter.World;

//To create PE bodies
const Bodies = Matter.Bodies;

//To give property-force,velocity
const Body = Matter.Body;

//To create connection
const Constraint= Matter.Constraint;

var engine;
var world;

var ground;

var top_wall;
var ball;
var chain;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  //Object
  ground =new Ground(200,390,400,20);

  var ball_options = {
    restitution: 0.95,
  }

  ball = Bodies.circle(100,200,20,ball_options);
  World.add(world,ball);


var chain_options={

  //pointA,pointB,bodyA,bodyB
  pointA:{x:200,y:20},
  bodyB:ball,
  pointB:{x:0,y:0},

  length:100,
  stiffness:0.1

}
 chain = Constraint.create(chain_options);
 World.add(world,chain);

 btn=createImg("up.png");
 btn.position(20,30)
 btn.size(50,50)
btn.mouseClicked(hforce)
  

  rectMode(CENTER);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20);

  push();
  stroke("red");
  strokeWeight(3);
  line(chain.pointA.x,chain.pointA.y,ball.position.x,ball.position.y);
  pop();

  ground.display();
  
}

function hforce(){

  //bodyname, starting force, ending force
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:0})

}


  
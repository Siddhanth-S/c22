//Class 22

//Namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myengine, myworld;
var ground;
var ball;

function setup() {
  createCanvas(400,400);

  myengine = Engine.create();
  myworld = myengine.world;

  var options = {
    isStatic: true
  }

  //Matter.Bodies.rectangle(x, y, width, height, [options])

  ground = Bodies.rectangle(200,390,400,20,options);
  World.add(myworld, ground);

  //Matter.Bodies.circle(x, y, radius, [options]);

  var balloptions = {
    restitution: 1
  }
  
  ball = Bodies.circle(200,100,20,balloptions);
  World.add(myworld, ball);

}

function draw() {
  background("black"); 

  Engine.update(myengine);
  
  rectMode(CENTER);
  fill("pink");
  rect(ground.position.x, ground.position.y, 400, 20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}
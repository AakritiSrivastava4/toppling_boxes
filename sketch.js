const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;


var box1;
var box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

   

    // creating objects
    box1= new Box(240,100,50,90)
    box2= new Box(200,200,50,50);
    ground = new Ground(200,350,400,5);
}

function draw(){
    background(0);
    Engine.update(engine);
    
    // you can acess the methods and properties of a class by the objcets only
    push ()
    fill ("red")
    box1.display();
    pop ()
    ground.display();
    box2.display();
}

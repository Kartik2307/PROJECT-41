var maxDrops=100;
var drops=[];
var batman;
var ground;
var thunder;

const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var world,engine;

function preload(){
  batmanimg=loadImage("walking.png")
  thunderimg=loadImage("thunder.png")
}
function setup() {
  createCanvas(480,750);
  engine=Engine.create();
  world=engine.world;

  batman=createSprite(210,540,30,30)
  batman.addImage(batmanimg)
  batman.scale=0.6;

  ground=createSprite(240,740,480,10);
  ground.shapeColor="red"

  thunder=createSprite(240,10,20,20)
  thunder.addImage(thunderimg)
  thunder.scale=0.6;


  Engine.run(engine);
}

function draw() {
  background(0);  

  
if(frameCount%60===0){
  drops.push(new Drop(random(width/2-10,width/2+10),10,10))
}

for (var k=0;k<maxDrops;k++){
  drops[k].display();
}

drawSprites();

}

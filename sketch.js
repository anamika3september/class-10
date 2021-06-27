var trex
var trexrunning
var ground
var groundimage
function preload () {
  trexrunning = loadAnimation("trex1.png","trex3.png","trex4.png") 
  groundimage = loadImage("ground2.png")
}
function setup() 
{
  createCanvas(600,200);
  trex = createSprite(50,160,20,50)
  trex.addAnimation("running",trexrunning)
  trex.scale = 0.6
  edges = createEdgeSprites()
  ground = createSprite(200,180,400,20)
  ground.velocityX = -2
  ground.addImage(groundimage)
}


function draw() 
{
background(255);
if (keyDown("space")) {
  trex.velocityY = -10
}
trex.velocityY = trex.velocityY +0.5
trex.collide(ground)

if (ground.x <0){
  ground.x = ground.width/2
}
drawSprites()

}

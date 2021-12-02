var trex ,trex_running;
function preload(){
  trex_running=loadAnimation("trex1.png","trex3.png","trex4.png");
  ground1=loadAnimation("ground2.png");
 
}

function setup(){
  createCanvas(1000,600)
  
  //create a trex sprite
 trex=createSprite(50,160,20,50);
 trex.addAnimation("running",trex_running);
 trex.scale=0.5
 trex.x=20;
 ground=createSprite(200,180,400,20);
 ground.addAnimation("ground_image",ground1);

}

function draw(){
  background("blue");
  if(keyDown("space")){
    trex.velocityY=-5;
  }
  trex.velocityY=trex.velocityY+0.5;
  trex.collide(ground);
drawSprites();
}
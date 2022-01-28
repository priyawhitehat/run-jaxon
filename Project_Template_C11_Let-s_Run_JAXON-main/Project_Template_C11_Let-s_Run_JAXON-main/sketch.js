var path,pathimg;
var boy,boyimg;
var b1,b2;

function preload()
{
  pathimg=loadImage("path.png");
  boyimg=loadAnimation("runner-1.png","runner-2.png");
}

function setup()
{
  createCanvas(400,400);
  //create sprites here
  path=createSprite(200,200,400,400);
  path.addImage(pathimg)
  path.velocityY=4;

  boy=createSprite(200,350);
  boy.addAnimation("walking",boyimg);
  boy.scale=0.1;
  b1=createSprite(0,200,20,400);
  b2=createSprite(400,200,20,400);
  b1.visible=false;
  b2.visible=false
}

function draw() 

{
  background(0);
  if(path.y>400)
  {
    path.y=height/2;
  }
  boy.x=mouseX;
  boy.collide(b1);
  boy.collide(b2);
  drawSprites();
}

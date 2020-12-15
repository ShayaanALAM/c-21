var fx;
var mx;
var r1;
var r2;
var r3;
var r4;

function setup() {
  createCanvas(1200,800);

  fx=createSprite(1200,400,50,80);
  fx.debug=true;
  fx.shapeColor="red";
  fx.velocityX=-7;

  mx =createSprite(100,100,50,50);
  mx.debug=true;
  mx.shapeColor="red";

r1=createSprite(0,400,50,80);
 r1.debug=true;
  r1.shapeColor="red";
r1.velocityX=7;

  r2=createSprite(100,100,50,80);
 r2.debug=true;
  r2.shapeColor="red";


  r3=createSprite(150,100,50,80);
  r3.debug=true;
  r3.shapeColor="red";

  r4=createSprite(200,100,50,80);
 r4.debug=true;
  r4.shapeColor="red";
}

function draw() {
  background(0,0,0); 
  
  mx.x=World.mouseX;
  mx.y=World.mouseY;

  
  isTouching(mx,r3);
bounceOff(r1,fx);
  drawSprites();
}
function isTouching(o1,o2){
  if(o1.x-o2.x<o2.width/2+o1.width/2
    && o2.x-o1.x<o2.height/2+o1.height/2){
    o1.shapeColor="violet";
    o2.shapeColor="violet";
  }
  else{
    o1.shapeColor="red";
    o2.shapeColor="red";
  }
}
function bounceOff(o1,o2){
if(o1.x-o2.x<o2.width/2+o1.width/2
  && o2.x-o1.x<o2.width/2+o1.width/2){
    o1.velocityX=o1.velocityX*(-1)
    o2.velocityX=o2.velocityX*(-1)
  }

}
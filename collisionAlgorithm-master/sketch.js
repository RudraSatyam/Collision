var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;
var ground;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -4;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = +4;

  gameObject1 = createSprite(300,200,50,50);
  gameObject1.shapeColor = "green";
  gameObject2 = createSprite(600,400,50,50);
  gameObject2.shapeColor = "green";
 //gameObject2.velocityY = 4;
 // gameObject2.velocityX = -4;
  gameObject3 = createSprite(600,200,50,50);
  gameObject3.shapeColor = "green";
  gameObject4 = createSprite(750,200,50,50);
  gameObject4.shapeColor = "green";

  ground = createSprite(600,750,1200,20);
  ground.shapeColor = "lightBlue";
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;

  if (isTouching(movingRect,gameObject1)) {
  movingRect.shapeColor = "red";
  gameObject1.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    gameObject1.shapeColor = "green";
  }

  bounceOff(movingRect,fixedRect);

  drawSprites();
}


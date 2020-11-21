var fixedRect,movingRect
function setup() {
  createCanvas(800,800);
  fixedRect = createSprite(600, 200, 50, 50);
  fixedRect.velocityX = -2;
  fixedRect.shapeColor = "red";
fixedRect.debug=true;

  movingRect = createSprite(200, 200, 50, 50);
  movingRect.velocityX = 2;
  movingRect.shapeColor = "blue"
  movingRect.debug=true;
}

function draw() {
  background(0);  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;
  if (movingRect.x-fixedRect.x<=fixedRect.width/2 + movingRect.width/2 && 
    fixedRect.x-movingRect.x<=fixedRect.width/2 + movingRect.width/2
    ){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
  }
  else if (movingRect.y-fixedRect.y<=fixedRect.height/2 + movingRect.height/2 && 
    fixedRect.y-movingRect.y<=fixedRect.height/2 + movingRect.height/2){
movingRect.velocityY = movingRect.velocityY * (-1);
fixedRect.velocityY = fixedRect.velocityY * (-1);
  }
  drawSprites();
}
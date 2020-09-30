var movingRect,fixedRect;
function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="green"
  fixedRect.debug=true;

  movingRect=createSprite(200,200,50,80);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  movingRect.velocityX=3;
fixedRect.velocityX=-3;
}

function draw() {
  
  background(0);  
 // movingRect.x=mouseX;
  //movingRect.y=mouseY;
console.log("distance: "+(movingRect.x-fixedRect.x));
console.log("width: "+(movingRect.width/2+fixedRect.width/2));
  
  /*if(isTouching(fixedRect,movingRect)){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}*/

bounceOff(fixedRect,movingRect);

  drawSprites();
}


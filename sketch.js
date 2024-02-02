var zig;
var sharko;
var ground, groundImage;
var obstacles, obstaclesImg;


function preload(){
  groundImage = loadImage("assets/ground.jpg");
}

function setup(){
  createCanvas(1200,600)

  // creating ground
  ground = createSprite(width/2,height,width,2);
 // ground.addImage("ground",groundImage);
  ground.x = width/2;

  // zig=createSprite(100,100,70,70);
  // sharko=createSprite(300,300,70,70);
  
  // obstacles=createSprite(500,500,50,50)

}

function draw(){

  background(groundImage);

  // if(obstacles.isTouching(zig)){
  //   zig.velocityX=-5
  // }

  // if(obstacles.isTouching(sharko)){
  //   sharko.velocityX=-5
  // }

  // if(keyIsDown(UP_ARROW)){
  //   zig.velocityY = -10
  // }

  // if(keyIsDown("W")){
  //   sharko.velocityY = -10
  // }

  if (ground.x < 0) {
    ground.x = ground.width/2;
  }

  if (background.x < 0) {
    background.x = background.width/2;
  }

  drawSprites();
}
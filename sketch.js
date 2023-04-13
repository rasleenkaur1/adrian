var player;
var loadScreen;
var gameState = "path1Screen";
var path1,path2,path3,path4;
var path2Scoller;
var path4Scene;
var path1Stairs,path1Arena;
var path1X,path1Y;
var x, y;
var WeaponRank;
var treasure;
var Enemy1, Enemy2, Enemy3, Enemy4;
var enemyScale = 5;
var path3Scene;
var path2background;

var gameState = "level1"


function preload(){
  WeaponRank = 0
  playerMoving = loadAnimation("walk_knight_1.png","walk_knight_2.png","walk_knight_3.png","walk_knight_4.png","walk_knight_5.png","walk_knight_6.png","walk_knight_7.png","walk_knight_8.png"
  ,"walk_knight_9.png","walk_knight_10.png","walk_knight_11.png","walk_knight_12.png")
  loadScreen1 = loadImage("assets/load screen.jfif")
  mapImage = loadImage("assets/map.jfif")
  path2Scoller = loadImage("Background/layer_2.png")
  path4Scene = loadImage("assets/path4.png")
  path1Stairs = loadImage("assets/temple scene.png")
  path1Arena =loadImage("assets/temple scene arena.png")
  treasure = loadImage("assets/bag_1.png")
 
  Enemy1 = loadImage("assets/torch.png")
  path3Scene = loadImage("assets/scene3.jfif")
  Enemy2 = loadImage("assets/zombie.png")
}


function setup(){
  createCanvas(windowWidth,windowHeight)

  bg = createSprite(width/2,height/2)
  bg.addImage(path1Arena)

  bg2 = createSprite(width/2,height/2)
  bg2.addImage(path2Scoller)
  bg2.scale = 6

  player = createSprite(width/2-500,height/2,100,100)
  player.addAnimation("moving",playerMoving)
  player.scale=3.5 
  
}


function draw(){
  background("black")

  if(keyDown(RIGHT_ARROW)){
    player.x+=5;
  }

   if(keyDown(UP_ARROW)){
    player.y-=5;
  }

   if(keyDown(DOWN_ARROW)){
    player.y+=5;
  }

  if(gameState==="level1"){
    bg2.visible =false;
    spawnobstacle()
    spawnrewards()
  }

  if(player.x>1200){
    gameState = "level2"
  }


  if(gameState==="level2"){
    bg.destroy();
    bg2.visible =true
    bg2.velocityX=-6

   
    
    
  }

   if(bg2.x<500){
      bg2.x = 1100
    }
  
  drawSprites()
}
  



function createPlayer(x,y){
  player =createSprite(x,y)
  player.addAnimation(playerMoving)
}
function spawnobstacle(){
  if(frameCount%100===0){
  var enemy = createSprite(player.x+200,player.y);
  enemy.addImage(Enemy1);
  enemy.velocityY = -3
  enemy.scale = 5
  }
  

}

function spawnrewards(){
  if(frameCount%150===0){
  var reward = createSprite(width/2,height/2);
  reward.x = Math.round(random(500,1200))
  reward.y = Math.round(random(100,600))
  reward.addImage(treasure);
  //reward.velocityY = -3
  reward.scale = 5
  }
  

}


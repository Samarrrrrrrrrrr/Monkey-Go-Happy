var bananaImage, obstacleImage, obstacleGroup, bananaGroup, background1, score, ground, player

function preload() {
  backImage=loadImage("jungle.jpg");
  
  player_running =
    loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bananaImage = loadImage("banana.png")
  obstacle_img = loadImage("stone.png")
}
function setup() {
  createCanvas(400, 400);
  
  background1 = createSprite(0, 0, 30, 30)
  background1.scale = 1.25
  background1.addImage("background",backImage)
  background1.velocityX = -5
  
  ground = createSprite(200, 375, 400, 30)
  
  bananaGroup = createGroup()
  obstacleGroup = createGroup()
  player = createSprite(50, 350, 30, 30)
  player.addAnimation("Monkey",player_running)
  player.scale = 0.15
  
  score = 0
}

function draw() {
  
  if(bananaGroup.isTouching(player)) {
    score = score+2
    bananaGroup.destroyEach()
  }
  
  if(obstacleGroup.isTouching(player)) {
    score = 0
    player.scale = 0.15
  }
    if (background1.x < 0){
      background1.x = background1.width/2;
}
  
  ground.visible = false
  
  if(keyDown("space")) {
    player.velocityY = -5
  }
  
  player.velocityY = player.velocityY+1
  
    player.collide(ground)
  
  switch(score) {
    case 10: player.scale = 0.2;
      break;
    case 20: player.scale = 0.22;
      break;
    case 30: player.scale = 0.24;
      break;
    case 40: player.scale = 0.26;
      break;
      default: break;
  }
  
  spawnBanana()
  
  spawnObstacle()
  
  background(220);
  
  drawSprites()
  
    text("score "+score, 180, 25)
}

function spawnBanana() {
  if(World.frameCount % 80 === 0) {
    var banana = createSprite(425,200,10,40);
banana.addImage("Banana",bananaImage)
banana.scale = 0.05
var rand = random(120, 200)
banana.y = rand
banana.lifetime = 1000
banana.velocityX = -5
bananaGroup.add(banana)
}
}

function spawnObstacle() {
  if(World.frameCount % 300 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.addImage("Stone",obstacle_img)
    obstacle.scale = 0.2
    obstacle.lifetime = 1000;
    obstacle.velocityX = -5
    obstacleGroup.add(obstacle)
}
}
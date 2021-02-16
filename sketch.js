var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  speed = random(223, 321);
  weight = random(30, 52);
  thickness = random(22, 83);

  bullet = createSprite(50, 200, 100, 20);
  bullet.shapeColor = "white";
  bullet.velocityX = speed;

  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor = rgb(80, 80, 80);

}

function draw() {
  background(200);  
  //bullet.collide(wall);
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    damage = (0.5*weight*speed**2)/thickness**3;
    console.log(damage)
      if(damage < 10){
        wall.shapeColor = rgb(0, 255, 0);
      }

      if(damage > 10){
        wall.shapeColor = rgb(255, 0, 0);
      }
    
      
  }

  drawSprites();
}

function hasCollided(lbullet, lwall){
  bulletRightEdge = bullet.x + bullet.width;
  wallLeftEdge = wall.x;
  if (bulletRightEdge >= wallLeftEdge){
    return true;
  }
  return false
}
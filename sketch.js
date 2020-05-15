var car, wall, ;
var speed, weight

/*function preload() {
  ball_img = loadImage("ball.png");
  paddle_img = loadImage("paddle.png");
}*/
function setup() {
  createCanvas(1600, 400);
  
  speed = random(55, 90)
  weight = random(400, 1500)

  car = createSprite(50, 200, 50, 50);
  //car.addImage("ball", ball_img);
  
  wall = createSprite(1500, 200, 60, height/2);
  //wall.addImage("paddle", paddle_img);
   
  car.velocityX = speed;
}

function draw() {
  background(0,0,0);
  
  if(ball.x - wall.x < ball.width/2 + wall.width/2
  && wall.x - ball.x < ball.width/2 + wall.width/2
  && ball.y - wall.y < ball.height/2 + wall.height/2
  && wall.x - ball.x < ball.height/2 + wall.height/2
    )  
  {

  }
  
  /*if(ball.x <= 0)
  {
    ball.velocityX = -ball.velocityX;
  }
  
  if(ball.y >= 400 || ball.y <= 0)
  {
    ball.velocityY = -ball.velocityY;
  }
  
  if(ball.x > 420)
  {
    ball.velocityX = 0;
    ball.velocityY = 0;
  }  
  
  if((ball.x +ball_img.width/2 >= paddle.x -paddle_img.width/2) && 
    (ball.y -ball_img.height/2 <= paddle.y +paddle_img.height/2) &&
    (ball.y +ball_img.height/2 >= paddle.y -paddle_img.height/2))
  {
    ball.velocityX = -ball.velocityX;
  }
      
  if(keyDown("Up_Arrow"))
  {
     paddle.y = paddle.y -5;
  }
  
  if(keyDown("Down_Arrow"))
  {
     paddle.y = paddle.y +5;
  }
    
  /* create Edge Sprites here */
    
  /* Allow the ball sprite to bounceOff the left, top and bottom edges only, leaving the right edge of the canvas to be open. */
  

  /* Allow the ball to bounceoff from the paddle */
  /* Also assign a collision callback function, so that the ball can have a random y velocity, making the game interesting */
 
  /* Prevent the paddle from going out of the edges */ 
  
  
  /*if(keyDown(UP_ARROW))
  {
     /* what should happen when you press the UP Arrow Key */
 // }
  
  //if(keyDown(DOWN_ARROW))
  //{
    /* what should happen when you press the UP Arrow Key */
  //}
  drawSprites();
  
//}

//function randomVelocity()
//{
  /* this function gets called when the ball bounces off the paddle */
  /* assign the ball a random vertical velocity, so it bounces off in random direction */
}


var hi;
var gameState=1;
function preload(){
hi=loadImage("myy/c20.jpg")
shutle=loadImage("myy/rrr.png.png");
meteor=loadImage("myy/metreorr.png");
lase=loadImage("myy/laser1.png");
}


function setup() {
  createCanvas(500,889);
  
  
}

function draw() {
  background(hi);  
  drawSprites();
  if(gameState===1){

    button=createButton("LEVEL 1");
    button.position(250,444.5);
    button.mousePressed(()=>{
      gameState=2;
     
    })
    }
    if(gameState===2){
    rocket=createSprite(250,800,20,20);
    rocket.addImage("shutle crock",shutle);
    rocket.scale=(0.03);
    metttGroup=createGroup();
   
    if(keyDown("space")){
laser = createSprite(rocket.x,rocket.y,20,20);
laser.addImage("laser",lase)
laser.scale=0.1;
laser.velocity.y=-20

    }

    
    if(keyDown("up")){
      rocket.velocityY=-5;
      
    }
    if(keyDown("down")){
      rocket.velocityY=5;
      
    }
    if(keyDown("left")){
      rocket.velocityX=-5;
      
    }
    if(keyDown("right")){
      rocket.velocityX=5;
      
    }
    button.hide();
    mettt();
    }
}
function mettt(){
  if(frameCount%20===0){
   met=createSprite(Math.round(random(450,5)),0,10,10,) 
   met.addImage("hi",meteor); 
  met.velocityY=5;
    met.scale=0.2;
metttGroup.add(met);
  }
}




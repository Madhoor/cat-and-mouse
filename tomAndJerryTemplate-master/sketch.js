var tom,catnormal,cat1,cat2;
var jerry,mousenormal,mouse1,mouse2;
var path1,path;

function preload() {
    //load the images here

catnormal = loadImage("images/cat normal.png");
cat1 = loadAnimation("images/mouse1.png , images/mouse2.png");
cat2 = loadImage( "images/cat collided.png" )

mousenormal = loadImage("images/mouse normal.png");
mouse1 = loadAnimation();
mouse2 = loadImage("images/mouse colided.png");

path1 = loadImage("images/garden.png");



}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    path = createSprite(500,400);
    path.addImage(path1);
    
    tom  = createSprite(700,700);
    tom.addImage(catnormal);
    tom.scale = 0.1;

    jerry = createSprite(200,700);
    jerry.addImage(mousenormal);
    jerry.scale = 0.1;

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    keyPressed();
    
drawSprites();
}


function keyPressed(){
    //For moving and changing animation write code here
if(keyIsDown(left_Arrow) ){
 
jerry.addAnimation("t",mouse1);

}

}

   var fish, fI, shark, shA;
   var bg1, bg2, bg3, bg4;
   var ob1, ob2, ob3, ob4, ob5, ob6;
   var ob7, ob8, ob9, ob10, ob11, ob12;
   var chest, chI, heart, hI, coin, cI;
   var shield, shI;

   var START = 0;
   var PLAY = 1;
   var END = 2;
   
   var gameState = START;

   var scrollSpeed = 10;
   var scrollSpeed2 = 10;
   var x1 = 0;
   var x2;

   var x3 = 0;
   var x4;

   var x5 = 0;
   var x6;

   var x7= 0;
   var x8;

 function preload(){
     bg1 = loadImage("background/background1.png");
     bg2 = loadImage("background/background2.png");
     bg3 = loadImage("background/background3.png");
     bg4 = loadImage("background/background4.png");

     fI = loadAnimation("fish/fish1.png", "fish/fish2.png", "fish/fish3.png", "fish/fish4.png",
                       "fish/fish7.png", "fish/fish8.png", "fish/fish9.png", "fish/fish10.png");

     shA = loadAnimation("shark/shark1.png", "shark/shark2.png", "shark/shark3.png",
                         "shark/shark4.png", "shark/shark5.png", "shark/shark6.png",
                         "shark/shark7.png", "shark/shark8.png");

     ob1 = loadImage("obstacles/Anchor.png");
     ob2 = loadImage("obstacles/Barrel_1.png");
     ob3 = loadImage("obstacles/plastic bag.png");
     ob4 = loadImage("obstacles/bottle.png");
     ob5 = loadImage("obstacles/Stone_4.png");
     ob6 = loadImage("obstacles/Net.png");

     ob7 = loadImage("obstacles/Barrel_2.png");
     ob8 = loadImage("obstacles/Mast.png");
     ob9 = loadImage("obstacles/Seaweed_1.png");
     ob10 = loadImage("obstacles/Steering-wheel.png");
     ob11 = loadImage("obstacles/Stone_1.png");
     ob12 = loadImage("obstacles/Stone_5.png");

     chI = loadImage("chest.png");
     hI = loadImage("Heart.png");
     cI = loadImage("Coin.png");
     shI = loadImage("Shield.png");
}


 function setup(){
     createCanvas(windowWidth, windowHeight);

     fish = createSprite(500, height - 100, 20, 20);
     fish.addAnimation("swim", fI);
     fish.scale = 0.2;

     shark = createSprite(200, height - 100, 20, 20);
     shark.addAnimation("eat", shA);
     shark.scale = 0.5;

     x2 = width;
     x4 = width;
     x6 = width;
     x8 = width;
}


 function draw(){
     
     background("cyan");

     scrollBackground();
     drawSprites();
}


 function scrollBackground(){
  if(frameCount <= 500){
    image(bg1, x1, 0, width, height);
    image(bg1, x2, 0, width, height);

    x1 -= scrollSpeed;
    x2 -= scrollSpeed;
  

 if (x1 <= -width){    
    x1 = width;           
}

 if(x2 <= -width){
   x2 = width;
}
}

 if(frameCount > 500 && frameCount <=1000) {

    image(bg2, x3, 0, width, height);
    image(bg2, x4, 0, width, height);

    x3 -= scrollSpeed2;
    x4 -= scrollSpeed2;

 if (x3 <= -width){    
    x3 = width;           
}

 if(x4 <= -width){
    x4 = width;
}
}

 if(frameCount > 1000 && frameCount <= 1500) {

   image(bg3, x5, 0, width, height);
   image(bg3, x6, 0, width, height);

    x5 -= scrollSpeed2;
    x6 -= scrollSpeed2;

if (x5 <= -width){    
    x5 = width;           
}

if(x6 <= -width){
    x6 = width;
}
}

if(frameCount > 1500 && frameCount <= 2000) {

    image(bg4, x7, 0, width, height);
    image(bg4, x8, 0, width, height);

    x7 -= scrollSpeed2;
    x8 -= scrollSpeed2;

 if (x7 <= -width){    
    x7 = width;           
}

 if(x8 <= -width){
    x8 = width;
}
}
}
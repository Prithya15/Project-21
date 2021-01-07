var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    surface1 = createSprite(100,500,100,20);  
    surface2 = createSprite(250,500,100,20);
    surface3 = createSprite(400,500,100,20);
    surface4 = createSprite(550,500,100,20);

    box = createSprite(random(20,750),300,50,50);

    surface1.shapeColor=(rgb(18,171,220));
    surface2.shapeColor=(rgb(255,180,3));
    surface3.shapeColor=(rgb(220,86,151));
    surface4.shapeColor=(rgb(66,204,67));
    box.shapeColor=(rgb(255,255,255));

    box.velocityX=3;
    box.velocityY=4;

    edges=createEdgeSprites()
}

function draw() {
    background(rgb(169,169,169));

 //create edgeSprite
 if(surface1.isTouching(box)&& box.bounceOff(surface1)){
     box.shapeColor=(rgb(18,171,220));
     music.play()
 }
 if(surface2.isTouching(box)&& box.bounceOff(surface2)){
    box.shapeColor=(rgb(255,180,3));
    music.stop();
    box.velocityX=0
    box.velocityY=0
}   
if(surface3.isTouching(box)&& box.bounceOff(surface3)){
    box.shapeColor=(rgb(220,86,151));
}
if(surface4.isTouching(box)&& box.bounceOff(surface4)){
    box.shapeColor=(rgb(66,204,67));;
    
} 

 box.bounceOff(edges)

 drawSprites();
}          
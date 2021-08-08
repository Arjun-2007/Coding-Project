
function preload(){

}
function setup() {
  createCanvas(2000,1000);
}

function draw() 
{
  if(keyDown("up")){
  background("blue");
  }
  if(keyDown("down")){
    background("green");
  }
  if(keyDown("left")){
    background("yellow");
  }

  if(keyDown("right")){
    background("red");
  }
}





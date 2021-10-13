
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box (100,200,70,70,-4);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move();
  box1.moveUp(-2);
}


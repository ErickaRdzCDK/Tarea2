var x
var y
function setup() {
  createCanvas(400, 400);
  x=0
  y=400
}

function draw() {
  background(220);
  ellipse(x,x,100,100)
  ellipse(y,y,100,100)
  ellipse(x,y,100,100)
  ellipse(y,x,100,100)
  x=x+1
  y=y-1
}
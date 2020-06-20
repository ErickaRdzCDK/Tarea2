  
var x
var y
function setup() {
  createCanvas(400, 400);
  x=400
}

function draw() {
  background(220);
  rectMode(CENTER)
  rect(200,200,x,x)
  ellipse(200,200,x-100,x-100)
  x=(x-1)
}

var x
var y
function setup() {
  createCanvas(400, 400);
  x=400
  y=0
}

function draw() {
  background(220);
  line(x,x,200,200)
  line(y,x,200,200)
  line(200,y,200,200)
  x=(x-1)
  y=(y+1)
}
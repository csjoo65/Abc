function setup() {
var bg;
var y = 0;

function setup() {
 
  bg = loadImage("B1.png");
  createCanvas(3333, 3333);
}

function draw() {
  background(bg);
  
  stroke(226, 204, 0);
  line(0, y, width, y);
  
  y++;
  if (y > height) {
    y = 0; 
  }
}
function setup(){

 	createCanvas(800, 800);
   img = loadImage("B1_2.png");}

function draw(){
   image(img,0,0);}

// draw function
if (mouseX < 300) {
  ellipse(200, 200, 100, 100);
} else {
  ellipse(400, 200, 100, 100);
}
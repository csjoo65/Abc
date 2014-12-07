function setup(){

 	createCanvas(800, 800);
   img = loadImage("B1_2.png");
	B2_2 = loadImage("B2_2.png");
	R_2 = loadImage("R_2.png");
	S_2 = loadImage("S_2.png"); 
}

function draw(){
   image(img,0,0);}

// draw function
if (mouseX < 300) {
image(S_2,0,0);
} 
else {
  ellipse(400, 200, 100, 100);
}

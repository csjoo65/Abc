function setup(){

 	createCanvas(800, 800);


 	var img;
 	var B2_2
 	var R_2
 	var S_2

   img = loadImage("B1_2.png");
	B2_2 = loadImage("B2_2.png");
	R_2 = loadImage("R_2.png");
	S_2 = loadImage("S_2.png"); 
}

function draw(){
   image(img,0,0);}

// draw function
if (mouseX < 300) {
image(S_2,100,100,800,,800);
} 
else {
  ellipse(400, 200, 100, 100);
}

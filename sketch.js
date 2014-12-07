

 	var img;
 	var B2_2
 	var R_2
 	var S_2


function setup(){


 	createCanvas(800, 800);

   img = loadImage("B1_2.png");
	B2_2 = loadImage("B2_2.png");
	R_2 = loadImage("R_2.png");
	S_2 = loadImage("S_2.png"); 
}


function draw(){
background(img);
image(B2_2);
if(mouseX<400){
image(S_2,0,3,800,800);;
}
else if (mouseX>600){
image(R_2,0,3,800,800);
}
else{
ellipse(400,200,100,100);
}

}
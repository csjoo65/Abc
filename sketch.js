

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


if(mouseX<20){
image(S_2,0,3,800,800);;
}
else if (mouseX>800){
image(R_2,0,3,800,800);
}
else{
ellipse(400,200,0,0);
}

image(B2_2);
}
var x = 230;
var y0 = 220;
var y1 = 280;
var y2 = 320;
var y3 = 350;
var y4 = 400;
var y5 = 420;
var y6 = 450;
var y7 = 490;
var y8 = 520;
var y9 = 570;
var y10 = 610;
var y11 = 640;
var y12 = 690;
var y13 = 710;
var y14 = 750;


function setup() {
  createCanvas(400, 400);
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 200, x, 20);
  
  // draw drip
  ellipse(x, y0, 10);
  ellipse(x, y1, 10);
  ellipse(x, y2, 10);
	ellipse(x, y3, 10);
  ellipse(x, y4, 10);
  ellipse(x, y5, 10);  
	ellipse(x, y6, 10);
  ellipse(x, y7, 10);
  ellipse(x, y8, 10);
	ellipse(x, y9, 10);
  ellipse(x, y10, 10);
  ellipse(x, y11, 10);
  ellipse(x, y12, 10);
  ellipse(x, y13, 10);
	ellipse(x, y14, 10);
 
	
  // down 3 pixels each frame, but maybe should be accelerating?
  y0 = y0 + 3
  y1 = y1 + 3
  y2 = y2 + 3
  y3 = y3 + 3
  y4 = y4 + 3
  y5 = y5 + 3
	y6 = y6 + 3
  y7 = y7 + 3
  y8 = y8 + 3
	y9 = y9 + 3
	y10 = y10 + 3
	y11 = y12 + 3
	y13 = y13 + 3
	y14 = y14 + 3
	
  // if invisible for a full “height” amount, reset
  if (y0 > height*2) {
     y0 = 220;
  }

  if (y1 > height*2) {
     y1 = 220;
  }

  if (y2 > height*2) {
     y2 = 220;
  }
	  if (y3 > height*2) {
     y3 = 220;
  }

  if (y4 > height*2) {
     y4 = 220;
  }

  if (y5 > height*2) {
     y5 = 220;
  }  
	if (y6 > height*2) {
     y6 = 220;
  }

  if (y7 > height*2) {
     y7 = 220;
  }

  if (y8 > height*2) {
     y8 = 220;
  }  
	if (y9 > height*2) {
     y9 = 220;
  }

  if (y10> height*2) {
     y10= 220;
  }

  if (y11> height*2) {
     y11= 220;
	
  }
	if (y12> height*2) {
     y12= 220;
  }

  if (y13> height*2) {
     y13= 220;
	}
	if (y14> height*2) {
     y14= 220;
  }

}

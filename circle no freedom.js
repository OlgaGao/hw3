function setup() {
  createCanvas(400, 400);
}

// track the circle to draw next frame
var x = 18;
var y = 18;
var x1 = 80;
var y1 = 90;

function draw() {
  colorMode(HSB);
  stroke(255);

  
  fill(random(x1, y1), 150, 70);
  ellipse(x, random(y), 30);

  x1 = x1 + 15;
  y1 = y1 + 1;

  if (x1 > 360) {
    x1 = 0;
  }
  if (y1 > 360) {
    y1 = 0;
  }


 
  x = x + 8;
  y = y + 9;
  
  if (x > width-180) {
    x = 18;
    y = y + 20;
  }

  if (y > height-80) {
    y = 18;
  }
}

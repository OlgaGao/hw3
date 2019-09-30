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

  
  fill(random(x1, y1), random(150), 70);
  ellipse(random(x), y, 30);

  x1 = x1 + 1;
  y1 = y1 + 1;

  if (x1 > 360) {
    x1 = 0;
  }
  if (y1 > 360) {
    y1 = 0;
  }


 
  x = x + 18;
  y = y + 14;
  
  if (x > width - 18) {
    x = 18;
    y = y + 18;
  }

  if (y > height - 18) {
    y = 18;
  }
}

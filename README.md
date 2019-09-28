# hw3

What code draws the blades of grass?
function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  x = x + 10;
  
What code makes the "lawnmower" come by? How often does it come by?
  if (x > width) {
    x = random(10);
    h = h + 3;
  }

  if (random(100) > 99.9) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;
  }


What's the point of the h variable?
it helps control the grass growth,and show everytime how much pixel of the grass height growing.


What does the -10 do in the second and fourth arguments of the line function, height-10-random(h) ? Why is it there?
height-10 it means to lock the grass location where from the bottom wall up 10 pixel. So the grass will grow start form the bottom wall.

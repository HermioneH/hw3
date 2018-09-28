# hw3
1.	What code draws the blades of grass?
line(x, height-10, x + random(-10, 10), height-10-random(h));
2.	What code makes the "lawnmower" come by? How often does it come by?
if (random() > 0.999) {
    noStroke();
    fill(255);
    rect(-1, -1, width+2, height-15);
    h = 10;
  }
When the random >0.999

3.	What's the point of the h variable?
Height of the grass
4.	What do the three numerical arguments of colorMode do?
The range of HSB is the max, which allows all the HSB.
5.	What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?
2th: make position of the grass starts on the ground
4th: make height of the grass keep grow larger
make sure the grass can continue grow


1.0-14
2.whil loop allows code to be executed repeatedly based on a given condition, and for loop execute a block of code a number of time.
3.the initialization, the condition, and the final expression
4.arryName[index]

1. determine variable
2.map(mouseX, 0,225,0,255)
3.random(1900,1999)

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background('navy'); //navy background

  //moon
  fill(255);
  stroke(0);
  circle(350, 50, 100);

  //overlapping navy circle for crescent moon
  stroke("navy");   
  fill("navy");
  circle(320,50,100);

  //big gray mountains
  stroke(0);
  fill('rgb(69, 70, 68)');
  triangle(250,0,50,300,400,300);
   fill('rgb(99, 100, 98)');
  triangle(150,50,-30,300,300,300);

  //grass
  fill('rgb(31, 101, 31)');
  rect(0,300, 400, 100);

  //trees
  stroke(0);
  fill('rgb(51, 183, 42)');
  triangle(25,0,10,205,40,205);
  triangle(260,50,230,270,300,270);


  //displays the x and y position of the mouse on the canvas
  fill(255) //white text
  text(`mouseX: ${mouseX}, mouseY: ${mouseY}`, 20, 20);  
}
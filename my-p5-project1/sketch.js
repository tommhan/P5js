function setup() {
    createCanvas(800, 600);
}

function draw() {
    background(220);
}
function setup() {
  /* creates a canvas 600px wide and 400px high.*/
  createCanvas(1600, 1400);
}

function draw() {
  background("rgb(17, 194, 238)");
  fill("rgb(252, 244, 3)");
  stroke("rgb(252, 198, 3)")
  strokeWeight(20);
  circle(550,50,100);
  // grass on bottom half
  stroke(0);
  strokeWeight(1);
  fill("rgb(52, 215, 20)");
  rect(0,200,600,200);
  //emojis
  textSize(50);
  text("🐞",mouseX, mouseY);
  text("🐝",mouseX+50, mouseY+ 50);
}
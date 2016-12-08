var xoff = 0;
var inc = 0.01;

function setup() {
    createCanvas(600, 400);
    colorMode(HSB);
    noStroke();
}

function draw() {
    background(20, 0.1);
    var n = noise(xoff) * width;
    ellipse(n, height/2, 50, 50);
    xoff += inc;
}
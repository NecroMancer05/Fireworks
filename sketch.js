var fireworks = [];
var gravity;
var count = 0.05;

function setup() {

  createCanvas(1000, 800);
  colorMode(HSB);
  gravity = createVector(0, 0.2);
  // fireworks.push(new Firework());
  stroke(255);
  strokeWeight(4);
  background(0);
}


function draw() {

  colorMode(RGB);
  background(0, 0, 0, 25);

  if (random(1) < count) {

    fireworks.push(new Firework());
  }

  for (var i = fireworks.length-1; i >= 0; i--) {
    fireworks[i].update();
    fireworks[i].show();

    if (fireworks[i].done()) {
      fireworks.splice(i, 1);
    }
  }
}


function keyPressed() {

  if(key === '+' && count < 1){

    count += 0.1;
  }else if(key === '-' && count > 0.1){

    count -= 0.1;
  }else if (key === '/') {

    count = 0.05;
  }
}

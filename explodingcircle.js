let sphereX = 50;
let squareX = 100;
let exploding = 250;
let y = 10;
let a = 5;
let l = 5;
let x = 10;
function setup() {
  createCanvas(400, 400, WEBGL);
}

function draw() {
  background(220);
  orbitControl();

  square(-100, -100, 230);

  push();
  translate(sphereX, 0, 0);
  square(-100, -100, 230);
  if (sphereX > 115 && sphereX < 500) {
    fill(255, 0, 0);
  } else {
    fill(100);
    for (let i = 0; i < l; i++) {
      let x = y + a * i;
      rect(30, 30, 50);
    }

    sphere(sphereX);
    sphere(50);
    pop();
    if (keyIsDown(UP_ARROW)) {
      sphereX = sphereX + 3;
    }
    if (keyIsDown(DOWN_ARROW)) {
      sphereX = sphereX - 3;
    }
  }
}

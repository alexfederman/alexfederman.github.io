let racerXs = [30, 40, 30, 45];
let startY = 50;
let yStep = 60;
let finishX = 560;
function setup() {
  createCanvas(600, startY + yStep * racerXs.length);
  drawRacer(70, 80);
  drawRacer(100, 100);
}
function draw() {
  background(240);
  line(finishX, 0, finishX, height);
  for (let i = 0; i < racerXs.length; i++) {
    let y = startY + yStep * i;
    if (racerXs[i] < finishX) {
      racerXs[i] += random(1, 3);
    }
    circle(racerXs[i], y, 24);
  }
  if (keyIsPressed(LEFT_ARROW)) { racerXs.push(100) }
  if (keyIsPressed(UP_ARROW)) {
    racerXs.pop()
  }
}


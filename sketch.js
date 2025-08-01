function setup() {
  createCanvas(400, 400);
  // Game setup
  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  // Set canvas size to full window
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function draw() {
  background(220);
}


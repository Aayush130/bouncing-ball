let x, y; // Ball position
let xSpeed, ySpeed; // Ball speed
let diameter = 50; // Ball diameter

function setup() {
  createCanvas(400, 400); // Create a 600x400 pixel canvas
  x = width / 2; // Start the ball in the center
  y = height / 2;
  xSpeed = 3; // Initial horizontal speed
  ySpeed = 2; // Initial vertical speed
}

function draw() {
  background(220); // Light gray background
  
  // Update ball position
  x += xSpeed;
  y += ySpeed;
  
  // Bounce off the left or right edge
  if (x > width - diameter / 2 || x < diameter / 2) {
    xSpeed *= -1; // Reverse horizontal direction
  }
  
  // Bounce off the top or bottom edge
  if (y > height - diameter / 2 || y < diameter / 2) {
    ySpeed *= -1; // Reverse vertical direction
  }
  
  // Draw the ball
  fill(255, 0, 0); // Red color
  noStroke();
  ellipse(x, y, diameter, diameter);
}




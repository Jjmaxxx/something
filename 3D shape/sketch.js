var img;
function preload(){
  img = loadImage("twitter.jpg");
}
function setup(){
  createCanvas(900,900,WEBGL);
}

function draw(){
  background(0);
  rotateY(millis()/ 1500);
  directionalLight(250,250,250,0,0);
  texture(img);
  orbitControl();
  sphere(200);
}

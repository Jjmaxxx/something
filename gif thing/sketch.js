var rings = [];

function setup(){
  createCanvas(400,400);
	createRings();
}
function draw(){
  drawRings();
	// background(0);
}
function createRings(){
  for(let radius = 800/4; radius>=0; radius -= 10){
    let tempRing = new Ring(radius,0);
		rings.push(tempRing);
  }

}
function drawRings(){
	for(let i=0;i<rings.length;i++){
    fill(rings[i].alpha);
		ellipse(200,200,rings[i].radius);
    for(let j=rings.length-2;j>=0;j--){
      rings[j]
    }
	}
}
class Ring {
  constructor(radius,alpha){
  this.radius = radius;
  this.alpha = alpha;
  }

  setRadius(radius){
    this.radius = radius
  }

  getRadius(radius){
    return this.getRadius;
  }

  setAlpha(alpha){
    this.alpha = alpha;
  }
}

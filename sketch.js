var sol;
var mercury;
var tierra;
var marte;
var urano;

function setup() {
  createCanvas(850, 800);
  angleMode(DEGREES);
  sol = new Padre(0,0);
  mercury = new Mercurio(0,0);
  tierra = new Tierra(0,0);
  marte = new Marte(0,0);
  urano = new Urano(0,0); 
}

function draw() {
  background(245);
  sol.mostrar();
  mercury.mostrar();
  tierra.mostrar();
  marte.mostrar(); 
  urano.mostrar(); 
}

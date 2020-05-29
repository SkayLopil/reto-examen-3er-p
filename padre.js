class Padre{
  constructor(x,y){
    this.x = x;
    this.y = y;
    //this.vel = z;
    this.img = loadImage("images/sols.png");
  }
  
   mostrar(){
    push();
    translate(425,400);
    imageMode(CENTER);
    scale(0.25);
    image(this.img,this.x,this.y);  
    pop();
  }
}

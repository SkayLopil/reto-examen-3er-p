class Tierra extends Padre{
  constructor(x,y){
    super(x,y);
    this.img = loadImage("images/tierra.jpg");
  }
  
 mostrar(){
    push();
    translate(225,625);
    imageMode(CENTER);
    scale(0.0625);
    image(this.img,this.x,this.y);  
    pop();
  }
}

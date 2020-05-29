class Marte extends Padre{
  constructor(x,y){
    super(x,y);
    this.img = loadImage("images/marte.jpg");
  }
  
 mostrar(){
    push();
    translate(285,575);
    imageMode(CENTER);
    scale(0.065);
    image(this.img,this.x,this.y);  
    pop();
  }
  
}

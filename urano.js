class Urano extends Padre{
  constructor(x,y){
    super(x,y);
    this.img = loadImage("images/urano.jpg");
  }
  
 mostrar(){
    push();
    translate(175,675);
    imageMode(CENTER);
    scale(0.085);
    image(this.img,this.x,this.y);  
    pop();
  }
}

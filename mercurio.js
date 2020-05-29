class Mercurio extends Padre{
  constructor(x,y){
    super(x,y);
    this.img = loadImage("images/mercurio.jpg");
  }
  
 mostrar(){
    push();
    translate(350,515);
    imageMode(CENTER);
    scale(0.125);
    image(this.img,this.x,this.y);  
    pop();
  }
  
  rotar(){
    
  }
}

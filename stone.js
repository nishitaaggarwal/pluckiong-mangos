class stone{
    constructor(x,y,r)
  {
    var options={
   restitution:0.3,
    density :0.5
  }
  this.body= Bodies.circle(x ,y ,r,options)
  this.image=loadImage("Plucking mangoes/stone.png")
this.radius=r
World.add(world,this.body)
  }
  display() 
  {  push();
    imageMode(CENTER)
    image(this.image,this.body.position.x,this.body.position.y,this.radius,this.radius)
    pop();
  }

}

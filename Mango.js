class Mango {
    constructor(x,y,r){
        var options = {
           isStatic:true, 
           restitution:0,
           friction:1
        }
        this.r = r;
        this.body = Bodies.circle(x, y, r, options);
        this.image = loadImage("PluckingMangoes/mango.png")
        World.add(world, this.body)
    }

display(){
    var pos = this.body.position
    translate(pos.x, pos.y)
    image(this.image, pos.x, pos.y, this.width, this.height)
    ellipse(0,0, this.r, this.r)
}
}
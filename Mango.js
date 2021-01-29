class Mango{
    constructor(x, y, width, height) {
        var options = {
            isStatic:true,
            restitution:0,
            friction:1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("PluckingMangoes/mango.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}
/*class Mango {
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
    imageMode(CENTER)
    image(this.image, 0, 0, 100, 100)
    //ellipse(0,0, this.r, this.r)
}
}*/
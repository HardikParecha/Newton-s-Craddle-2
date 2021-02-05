class Pendulum{
    constructor(x,y, color){
        var options ={
          isStatic:false,
            restitution:1,
            friction:3,
            frictionAir:0,
            slop:0,
            interia:Infinity,
        };
        this.body = Bodies.rectangle(x, y, 60,60, options);
        this.x= x;
        this.y= y;
        this.color = color;
        World.add(world, this.body);
    }
    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(3)
      
        fill(this.color);
        ellipse(0, 0, 60, 60);
        pop();
    }
}
class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB

        polygan_img = loadImage("polygon.png");
      
        this.chain = Constraint.create(options);
        polygan = bodies.circle(50,200,20);
        polygan = this.polgyan;
        World.add(world, this.chain);
        World.add(world, this.polgyan);
    }

    attach(body){
        this.chain.bodyA=polgyan
    }

    fly(){
        this.chain.bodyA = null
    }

    display(){


        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(6);
            stroke("#301608");
            line(pointA.x-15, pointA.y, pointB.x-20, pointB.y);
            line(pointA.x+23, pointA.y, pointB.x+30, pointB.y);

            image(polygan_img , polygan.position.x,polygan.position.y,40,40);
        }
    }
    
}













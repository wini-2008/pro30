var ground
var block1
var chain

function setup() {

    var canvas = createCanvas(1200,400);

   
    ground = new land(600,300,1200,20);
    ground2 = new land(300,240,100,20);
     
 
    block1 = new boxie(330,235,30,40);
    block2 = new boxie(360,235,30,40);
    block3 = new boxie(390,235,30,40);
    block4 = new boxie(420,235,30,40);
    block5 = new boxie(450,235,30,40);
    block6 = new boxie(360,195,30,40);
    block7 = new boxie(390,195,30,40);
    block8 = new boxie(420,195,30,40);
    block9 = new boxie(390,155,30,40);


    Chain = new chain(this.polygon,{x :100,y:200});
}

function draw() {

    ground.display();
    ground2.display();
    
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();

    Chain.display();
    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    chain.fly();
}

function keyPressed() {
    if(keyCode ===32){
        chain.attach(this.polygon);
    }
}










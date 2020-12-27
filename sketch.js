var bullet,wall;
var speed,weight;
var thickness;

function setup()
{

createCanvas(1600,400);

speed=random(223,321);
weight=random(30,52);

bullet =createSprite(50,200,50,50);
bullet.velocityX=speed;
bullet.weight=weight;
bullet.shapeColor=("#F7F7F7");

thickness=random(22,83);;

wall =createSprite(1200,200,thickness,height/2);
wall.shapeColor=color(80,80,80);
    
}

function draw()
{
    background(200);

    if(collide(bullet,wall))
    {
        bullet.velocityX=0;

        var d=0.5*weight*speed*speed/(thickness*thickness*thickness);

        if(d>10)
        {
            wall.shapeColor=color(255,0,0);
        }
        if(d<10)
        {
            wall.shapeColor=color(0,255,0)
        }

    }

    drawSprites();
}
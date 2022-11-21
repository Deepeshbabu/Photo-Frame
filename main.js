function preload() 
{

}

function setup() 
{
    can = createCanvas(640, 480) ;
    can.position(110, 250) ;
    vd = createCapture(VIDEO) ;
    vd.hide() ;
}

function draw() 
{
    image(vd, 30, 30, 580, 420) ;
    fill(20, 20, 20) ;
    noStroke() ;
    rect(0,0,640,30) ;
    rect(0,0,30,640) ;
    fill(0, 0, 0) ;
    noStroke() ;
    rect(500,500,470,0) ;
    rect(500,500,0,470) ;
}

function take_snapshot() 
{
    save("stn.png") ;
}
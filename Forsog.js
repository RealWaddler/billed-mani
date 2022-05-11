let img;
var btnSize = 100
var CirAntal = 1;

function preload() {
    let bild = ['dame.png','batman.png','superman.png','flash.png','iron.png','punch.png','bowser.png'];
    let bildran = random(bild);
    img = loadImage(bildran);
}

function setup() {
    w = img.width;
    h = img.height;
    createCanvas(w,h+btnSize);
    img.loadPixels();
    noStroke();
}

function draw() {
    background(255,255,255);
    stage(CirAntal);
}

function stage(CirAntal){
    CirSqrt = sqrt(CirAntal);
    CirStr = w/CirSqrt;
    for(let o=0;o<CirSqrt;o++){
        for(let p=0;p<CirSqrt;p++){
            k=0;
            r=0;
            g=0;
            b=0;
            for(let i=0;i<CirStr;i++){
                for(let j=0;j<CirStr;j++){
                    k++
                    r = r + getPixelValue(0,i+o*CirStr,j+p*CirStr)
                    g = g + getPixelValue(1,i+o*CirStr,j+p*CirStr)
                    b = b + getPixelValue(2,i+o*CirStr,j+p*CirStr)
                }
            }
            avgr = r/k
            avgg = g/k
            avgb = b/k
            fill(avgr,avgg,avgb);
            ellipse(w/(CirSqrt*2)+CirStr*o,h/(CirSqrt*2)+CirStr*p,CirStr,CirStr);
        }
    }
}
        
function getPixelValue(n,i,j){
    p = img.pixels[(i+w*j)*4+n];
    return p;
}

function mouseClicked(){
    if (CirAntal < 65536){
        CirAntal = CirAntal*4
    } else {
        CirAntal = 1
    }
}
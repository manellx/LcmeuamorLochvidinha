let Xbolinha = 20;

let Ybolinha = 20;

let Xraquete = 5;

let Yraquete = 150;

let RaqueteComprimento = 10;

let RaqueteAltura = 90;

let diametro = 25;

let raio = diametro / 2;

let velocidadeX = 2;

let velocidadeY = 4;

function setup() {
  createCanvas(400,400)
}

function draw() {
  background("rgba(0,0,0,0.34)");

  mostraBolinha();
  movimentarBolinha();
  verificaColisaoBorda();
  mostraRaquete();
  movimentaRaquete();
  verificacolisaoRaquete();

function mostraRaquete(){
 fill("rgb(0,0,0)");
  rect(Xraquete,Yraquete,RaqueteComprimento,RaqueteAltura);
} 
function mostraBolinha() {
  circle(Xbolinha, Ybolinha, diametro);
}
function movimentarBolinha() {
    Xbolinha = Xbolinha + velocidadeX;
  Ybolinha = Ybolinha + velocidadeY;

}

function verificaColisaoBorda(){
    if (Ybolinha + raio > height || Ybolinha - raio < 0) {
   velocidadeY *=-1;
    
  }
   if (Xbolinha + raio > width || Xbolinha - raio < 0) { 
   velocidadeX *=-1;
  }
}
function mostraRaquete(){
 fill("rgb(255,255,255)"); rect(Xraquete,Xraquete,RaqueteComprimento,RaqueteAltura);
}
function movimentaRaquete(){
 if(keyIsDown(87)){
   Yraquete -=5;
 }
   if(keyIsDown(83)){
   Yraquete +=5;
 }
}

function verificacolisaoRaquete (x,y){
  colidiu = collideRectCircle(x,y,RaqueteComprimento,RaqueteAltura,Xbolinha,Ybolinha,raio);
  if(colidiu){
    velocidadeX *=-1;}
  } 
}
var canvas,backgroundImage,gameState=0,playerCount;
var player,form,game,database;
function setup(){
  canvas=createCanvas(500,500);
  database=firebase.database();
  game=new Game();
  game.getState();
  game.start();

}
function draw(){
  
}
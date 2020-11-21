var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;

var player, form,game;
var player1,player2;
var players;
var enemy;
var enemyGroup;
var player_Img,enemykingImg,enemyImg;
var bulletGroup;
var enemyKing;
var bullet_Img;


var level=1;


function preload(){

  if(level ===1){
    enemykingImg = loadImage("images/Level1/Enemy.png");
    player_img = loadImage("images/Level1/Player.png");
    enemyImg = loadImage("images/Level1/SmallEnemy.png");

  }

  else if(level === 2){
    enemykingImg = loadImage("images/Level2/Enemy.png");
    player_img = loadImage("images/Level2/Player.png");
    enemyImg = loadImage("images/Level2/SmallEnemy.png");

  
  }

  else if(level === 3 ){
    enemykingImg = loadImage("images/Level3/Enemy.png");
    player_img = loadImage("images/Level3/Player.png");
   // enemyImg = loadImage("images/Level2/SmallEnemy.png");

  }

  back_img= loadImage("images/Background.jpg");
  bullet_Img= loadImage("images/bullet.png");
  enemyGroup = new Group();
  bulletGroup = new Group();
}
function setup() {
  createCanvas(1000, 600);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}
//Create variables here
var dog,foodS,happydog,database,foodStock,dogImage





function preload()
{
	//load images here
dogImage = loadImage("images/dogImg.png")
happydog = loadImage("images/dogImg1.png")




}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dogImage)
  dog.scale = 0.5
  database = firebase.database()
  foodStock = database.ref("Food")
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happydog);
    
 }
  drawSprites();
  //add styles here
textSize(20)
fill(255)
text("foodStock "+foodS,250,50);
}
function readStock(data){
foodS = data.val()
}

function writeStock(x){
  
  if(x<=0){
   x =0
  }
  else{x = x-1}
  
  
  
  
  database.ref("/").update({
    Food:x
  })
}






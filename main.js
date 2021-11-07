// Create a reference for the canvas
canvas= document.getElementById('canvas');
ctx= canvas.getContext('2d');

img_width = 300;
img_height = 100;

var img_image;

img_x = 100;
img_y = 100;

function add() {
	img_imgTag = new Image(); //defining a variable with a new image
	img_imgTag.onload = uploadimg; // setting a function, onloading this variable
	img_imgTag.src = img_image;   // load image
}

function uploadimg() {

	ctx.drawImage(img_imgTag, img_x, img_y, img_width, img_height);
}

//Write a code to grab the key-pressed event
window.addEventListener("keydown", my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	   //write a code to check the type of key pressed
		if((keyPressed >=97 && keyPressed<=122)|| (keyPressed >=65 && keyPressed<=90)){
        //write a code to check the type of key pressed
       aplhabetkey();
	   document.getElementById("d1").innerHTML="You Pressed Alphabet Key."
	   console.log("alphabet key");
		}
	else if(keyPressed>=48 && keyPressed<=57){
		numberkey();
		document.getElementById("d1").innerHTML="You pressed Number Key";
	}
	else if(keyPressed>=37 && keyPressed<=40) {
		arrowkey();
		document.getElementById("d1").innerHTML="You pressed Arrow key";
	}
	else if((keyPressed=17)||(keyPressed=18)||(keyPressed=27)||(keyPressed=13)||(keyPressed=16)) {
		specialkey();
		document.getElementById("d1").innerHTML="You pressed Special key";
	}
   else if((keyPressed>=33 && keyPressed<=47)||(keyPressed>=58 && keyPressed<=64)||(keyPressed>=91 && keyPressed<=96)||(keyPressed>=123 && keyPressed<=126)){
	   symbolkey();
	   document.getElementById("d1").innerHTML="You pressed Symbol key";
   }
}

function aplhabetkey()
{
	//upload respective image with the message. 
    img_image="Alpkey.png";
    add();
}
function numberkey()
{
	img_image="numkey.png";
	add();	
}
function arrowkey()
{
	img_image="arrkey.png";
add();
}
function specialkey()
{
	img_image="spkey.png";
add();
}
function otherkey()
{
	img_image="otherkey.png";
	add();
}
function symbolkey()
{
	img_image="symkey.png";
	add();
}
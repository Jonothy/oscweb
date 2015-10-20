init();

var redslider, greenslider, blueslider;
var redval, greenval, blueval;
var redtext, greentext, bluetext;

function init(){

 redslider = document.getElementById("redslider");
 greenslider = document.getElementById("greenslider");
 blueslider = document.getElementById("blueslider");
 redtext = document.getElementById('redtext');
 greentext = document.getElementById('greentext');
 bluetext = document.getElementById('bluetext');

 redslider.oninput = function(){
    console.log(this.value);
    redtext.value=this.value; 
    slideChange();
 }

 greenslider.oninput = function(){
    console.log(this.value);
    greentext.value=this.value; 
    slideChange();
 }

 blueslider.oninput = function(){
    console.log(this.value);
    bluetext.value=this.value; 
    slideChange();
 }

};

function slideChange() {

	redval = redslider.value;
	greenval = greenslider.value;
	blueval = blueslider.value;

	setBgColor();
	sendToServer();
};

function setBgColor() {
	document.body.style.backgroundColor = "rgb(" + redval + "," + greenval + "," + blueval + ")"; 
}

function sendToServer() {
	var xhttp = new XMLHttpRequest();
	xhttp.open("POST", "instruction", true);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("redval="+redval+"&greenval="+greenval+"&blueval="+blueval);
}
init();

var redslider, greenslider, blueslider;
var redval, greenval, blueval;

function init(){

 redslider = document.getElementById("redslider");
 greenslider = document.getElementById("greenslider");
 blueslider = document.getElementById("blueslider");

 redslider.oninput = function(){
    console.log(this.value);
    document.getElementById('redtext').value=this.value; 
    slideChange();
 }

 greenslider.oninput = function(){
    console.log(this.value);
    document.getElementById('greentext').value=this.value; 
    slideChange();
 }

 blueslider.oninput = function(){
    console.log(this.value);
    document.getElementById('bluetext').value=this.value; 
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
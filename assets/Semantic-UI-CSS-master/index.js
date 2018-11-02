/**
 * 
 */
function doFirst(){
	document.getElementById("pic1").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic2").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic3").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic4").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic5").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic6").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic7").addEventListener("dragstart",startDrag, false);
	document.getElementById("pic8").addEventListener("dragstart",startDrag, false);
	
	
	leftBox = document.getElementById('leftBox');
	leftBox.addEventListener("dragenter", function(e){e.preventDefault();},false);
	leftBox.addEventListener("dragover", function(e){e.preventDefault();},false);
	leftBox.addEventListener("drop", dropped,false);

	rightBox = document.getElementById('rightBox');
	rightBox.addEventListener("dragenter", function(e){e.preventDefault();},false);
	rightBox.addEventListener("dragover", function(e){e.preventDefault();},false);
	rightBox.addEventListener("drop", dropped,false);
}

function startDrag(e){
	var code = e.target.id;
	e.dataTransfer.setData('Text', code);
}

function dropped(e){
	e.preventDefault();
	var data = e.dataTransfer.getData('Text');
	console.info(data);
	e.target.appendChild(document.getElementById(data));
	
}

window.addEventListener("load", doFirst, false);
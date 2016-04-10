//non-working code
/*document.getElementById("add-idea-submit").onclick(
	alert("stop it");
	)*/

window.onload = function() {
	document.getElementById("add-idea").focus();
}

var ideaArray = [];

function fuck() {
	alert("FUCK YOU!!!");
	document.getElementById("add-idea").removeAttribute("placeholder"); //see how to add it back when click outside again
}

function submitArray(event) {
	event.preventDefault();					//prevent page from refreshing on submit
	var submission = document.getElementById("add-idea").value;
	ideaArray.push(submission);
	console.log(ideaArray);
	//document.getElementById("idea-array").innerHTML = ideaArray;
	addArrayItemsToDiv();
	function addArrayItemsToDiv() {
		var newDiv = document.createElement("div");
		var node = document.createTextNode(submission);
		newDiv.appendChild(node);
		var element = document.getElementById("idea-array");
		element.appendChild(newDiv);
	}
}


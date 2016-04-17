//JavaScript
/*window.onload = function() {
	document.getElementById("add-idea").focus();
}*/

//jQuery
$(document).ready(function() {
	$('#add-idea').focus();
})

var ideaArray = [];

//JavaScript
/*function fuck() {
	alert("FUCK YOU!!!");
	document.getElementById("add-idea").removeAttribute("placeholder"); //see how to add it back when click outside again
}*/

//jQuery - unwanted!!!
/*function removePlaceholder() {
	$('#add-idea').removeAttr('placeholder');
}*/

//JavaScript
/*function submitArray(event) {
	event.preventDefault();					//prevent page from refreshing on submit
	var submission = document.getElementById("add-idea").value;
	ideaArray.push(submission);
	console.log(ideaArray);
	//document.getElementById("idea-array").innerHTML = ideaArray;
	addArrayItemsToDiv();
	document.getElementById("add-idea").value = '';				//clears the value entered from the submission
	function addArrayItemsToDiv() {
		var newDiv = document.createElement("div");
		var node = document.createTextNode(submission);
		newDiv.appendChild(node);
		var element = document.getElementById("idea-array");
		element.appendChild(newDiv);
	}
}*/

//jQuery - original code
/*function submitArray(event) {
	event.preventDefault();
	var submission = $('#add-idea').val();
	ideaArray.push(submission);
	//console.log(ideaArray);
	$('#add-idea').val('');
	addArrayItemsToDiv();
	function addArrayItemsToDiv() {
		$('#idea-array').append('<div class="idea-div"></div>');
		$('.idea-div').append(submission);
	}
}*/

//submitArray optimized
function submitArray(e) {
	e.preventDefault();
	var submission = $('#add-idea').val();
	ideaArray.push(submission);
	$('#idea-array').append('<div>' + submission + '</div>');
	$('#add-idea').val('');
}


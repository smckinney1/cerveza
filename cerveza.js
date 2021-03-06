//JavaScript
/*window.onload = function() {
	document.getElementById("add-idea").focus();
}*/

//jQuery
$(document).ready(function() {
	$('#add-idea').focus();
	initializeButtons();
})

function initializeButtons () {
	var submitIdea = document.getElementById('add-idea-submit');
	var drink = document.getElementById('drink');
	submitIdea.addEventListener('click', submitArray);	//will make this on submit later
	drink.addEventListener('click', createCSS);
	drink.addEventListener('click', playAudio);
}

var ideaArray = [];

var voteCount = 0;		//use this in the submitArray function later

var voteIcons =
	'<span class="vote float-right">' + voteCount + '</span>' +
	'<button type="button" class="btn btn-default btn-xs float-right">' +
		'<span class="glyphicon glyphicon-menu-down"></span>' +
	'</button>' +
	'<button type="button" class="btn btn-default btn-xs float-right">' +
		'<span class="glyphicon glyphicon-menu-up"></span>' +
	'</button>'


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
	ideaArray.push({
		value: submission,
		votes: voteCount
	});
	$('.idea-array').addClass('well well-sm');

	$('#idea-array').append('<li class="list-group-item">' + submission + voteIcons + ' ' + voteCount + '</li>');
	console.log(ideaArray);

	$('.glyphicon-menu-up').click(function(ev) {
		voteCount++;
		console.log(voteCount);
		debugger;
		$('.vote').text(voteCount);
	});

	$('#add-idea').val('');
}

/*var vote = 0;
when click up: vote +=1
--move li up 1 spot in the list
when click down: vote -=1
--move li 1 spot down in the list*/



var flashBlue = function () {
	setTimeout (function () {
		document.body.style.backgroundColor = "#009CDB";
		console.log("blue");
		flashWhite();
	}, 1000);
}

var flashWhite = function () {
	setTimeout (function () {
		document.body.style.backgroundColor = "#fff";
		console.log("white");
		flashBlue();
	}, 1000);
}

//JavaScript to make background flash colors when "Drink" button is clicked
function createCSS (e) {
	flashBlue();
	/*setTimeout (function () {
		//console.log("running timeout function");
		document.body.style.backgroundColor = "#009CDB";
		setTimeout (

			function () {
				document.body.style.backgroundColor = "#fff";
				setTimeout (
					function () {
						document.body.style.backgroundColor = "#009CDB";
						setTimeout (
							function () {
								document.body.style.backgroundColor = "#fff";
							}, 300);

					}, 300);

			}, 300);

	}, 300);*/
}




/*var i;
	function changeColors () {
		i = 1;
		setInterval(change, 500);
	}
	function change () {
		if (i === 1) {
			color="#009CDB";
			i = 2;
		} else {
			color="#fff";
			i = 1;
		}
		document.body.style.background = color;
	}*/

function playAudio() {
	var audio = document.getElementById("audio");
	audio.play();
}
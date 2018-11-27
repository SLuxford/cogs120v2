// Call this function when the page loads (the jQuery "ready" event)
//$(document).ready(function() {
//	initializePage();
//})

/*
 * Function that is called when the document is ready.
 */

/* function initializePage() {

	$("#muscle input:checked").each(function(e) {
		document.getElementById("tutURL").href = "chest.html";
	});

	$("#weight input:checked").each(function(e) {
		document.getElementById("tutURL").href = "core.html";
	});

	$("#flexibility input:checked").each(function(e) {
		document.getElementById("tutURL").href = "legs.html";
	}); */

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
}

function changeToChest() {

  var checkBox = document.getElementById("muscle");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "chest.html";
	}
}

function changeToLegs() {

  var checkBox = document.getElementById("weight");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "legs.html";
	}
}

function changeToCore() {

  var checkBox = document.getElementById("flexibility");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "core.html";
	}
}

function collectCheckboxes() {
	var selected = [];
	$('#checkboxes input:checked').each(function() {
    	selected.push($(this).attr('name'));
	});
	localStorage.setItem("selected", selected);
}

$("#tutURL").click(function(e) {
	collectCheckboxes();
	document.getElementById("tutURL").href = "chest.html";
});

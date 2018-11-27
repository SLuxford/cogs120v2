// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	initializePage();
})

/*
 * Function that is called when the document is ready.
 */

function initializePage() {

	$("#muscle").click(function(e) {
		alert('yo')
		document.getElementById("tutURL").href = "chest.html";
	});

	$("#weight").click(function(e) {
		document.getElementById("tutURL").href = "core.html";
	});

	$("#flexibility").click(function(e) {
		document.getElementById("tutURL").href = "legs.html";
	});

	// Add any additional listeners here
	// example: $("#div-id").click(functionToCall);
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
	//document.getElementById("tutURL").href = "chest.html";
});

function changeToChest() {

  var checkBox = document.getElementById("muscle");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "../tut-main/tut-main-chest.html";
	}
}

function changeToLegs() {

  var checkBox = document.getElementById("weight");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "../tut-main/tut-main-legs.html";
	}
}

function changeToCore() {

  var checkBox = document.getElementById("flexibility");
	if(checkBox.checked == true){
    document.getElementById("tutURL").href = "../tut-main/tut-main-core.html";
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
	//document.getElementById("tutURL").href = "chest.html";
});

$(document).ready(function() {
	$("#addButton").click(function() {
		if($(input).val() === "") {
		} else {
			$("#ul").append("<li>" + $("#input").val() + 
			"<button id=\"deleteButton\" type=\"button\" class=\"btn btn-danger\">Delete</button></li>");
		}
	});

	$("#clearButton").click(function(){
		$("#ul").empty();
	});

	$("#deleteButton").click(function(){
		$(this).parent().remove();
	});
});
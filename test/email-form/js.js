



// SHOW WHAT'S BEING TYPED

$(".subject").keyup(function(){
	
	var subjectValue = $(this).val();
	$(".subject-p").text(subjectValue);
	
}).keyup();

$(".body").keyup(function(){
	
	var bodyValue = $(this).val();
	$(".body-p").text(bodyValue);
	
}).keyup();





$(".send").click(function(){
	
	
	// GET INPUT AND TEXTAREA VALUES
	
	var subjectValue = $(".subject").val();
	var bodyValue = $(".body").val();
	
	
	// SEE WHAT THE VALUES ARE
	
	if (subjectValue == "Your Subject"){
		
		var emailSubject = "";
		
	} else {
		
		var specialCharactersRemover = encodeURIComponent(subjectValue);
		var emailSubject = specialCharactersRemover;
		
	}
	
	if (bodyValue == ""){
		
		var emailBody = "";
		
	} else {
		
		var specialCharactersRemover = encodeURIComponent(bodyValue);
		var emailBody = specialCharactersRemover;
		
	}
	
	
	// CREATE MAILTO: QUERIES
	
	var hrefValue = $(".send").attr("href");
	$(".send").attr("href",hrefValue+"?subject="+emailSubject+"&body="+emailBody);
	
	
	$(".subject").val() = "";
	$(".body").val() = "";
	
});





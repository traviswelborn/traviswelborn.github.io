

// HIDE ELEMENTS

$(".down-1,.down-2,.down-3").addClass("hidden-down");


$(document).ready(function(){
	
	
	// COPYRIGHT YEAR
	
	var date=new Date();
	var year=date.getFullYear();
	
	$(".year").html(year);
	
	
	// SHOW ELEMENTS
	
	setTimeout(function(){
		
		$(".down-1").addClass("show-down").removeClass("hidden-down");
		
	},250);
	
	setTimeout(function(){
		
		$(".down-2").addClass("show-down").removeClass("hidden-down");
		
	},500);
	
	setTimeout(function(){
		
		$(".down-3").addClass("show-down").removeClass("hidden-down");
		
	},750);
	
	
	// SHOW/HIDE FORM
	
	$(".email-image,.email-text").click(function(){
		
		$(".wrapper").addClass("blur").removeClass("no-blur");
		$(".form-wrapper").addClass("form-show").removeClass("form-hidden");
		$("body").addClass("freeze").removeClass("unfreeze");
		
	});
	
	$(".close-hr,.close-button").click(function(){
		
		$(".wrapper").addClass("no-blur").removeClass("blur");
		$(".form-wrapper").addClass("form-hidden").removeClass("form-show");
		$("body").addClass("unfreeze").removeClass("freeze");
		
		// ERASE FORM
		
		$(".name").val() = "";
		$(".subject").val() = "";
		$(".body").val() = "";
		
	});
	
	
	// SUBMIT FORM
	
	$(".send").click(function(){
		
		
		// GET INPUT AND TEXTAREA VALUES
		
		var nameValue = $(".name").val();
		var subjectValue = $(".subject").val();
		var bodyValue = $(".body").val();
		
		
		// SEE WHAT THE VALUES ARE
		
		if (nameValue != ""){
			
			var specialCharactersRemover = encodeURIComponent(nameValue);
			var emailName = "%0D%0A%0D%0ASincerely,%0D%0A"+specialCharactersRemover;
			
		} else {
			
			var emailName = "";
			
		}
		
		if (subjectValue != ""){
			
			var specialCharactersRemover = encodeURIComponent(subjectValue);
			var emailSubject = specialCharactersRemover;
			
		} else {
			
			var emailSubject = "";
			
		}
		
		if (bodyValue != ""){
			
			var specialCharactersRemover = encodeURIComponent(bodyValue);
			var emailBody = specialCharactersRemover;
			
		} else {
			
			var emailBody = "";
			
		}
		
		
		// CREATE MAILTO: QUERY STRING
		
		var hrefValue = $(".send").attr("href");
		$(".send").attr("href",hrefValue+"?subject="+emailSubject+"&body="+emailBody+emailName);
		
		
		// ERASE FORM
		
		$(".name").removeAttr("value");
		$(".subject").removeAttr("value");
		$(".body").removeAttr("value");
		
		
		// HIDE FORM
		
		$(".wrapper").addClass("no-blur").removeClass("blur");
		$(".form-wrapper").addClass("form-hidden").removeClass("form-show");
		$("body").addClass("unfreeze").removeClass("freeze");
		
		
	});
		
	
});
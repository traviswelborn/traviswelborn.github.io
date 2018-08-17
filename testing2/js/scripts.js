

// HIDE ELEMENTS

$(".slide-in-1,.slide-in-2,.slide-in-3").addClass("hidden-slide-in");


$(document).ready(function(){
	
	
	// COPYRIGHT YEAR
	
	var date=new Date();
	var year=date.getFullYear();
	
	$(".year").html(year);
	
	
	// SHOW ELEMENTS
	
	setTimeout(function(){
		
		$(".slide-in-1").addClass("show-slide-in").removeClass("hidden-slide-in");
		
	},300);
	
	setTimeout(function(){
		
		$(".slide-in-2").addClass("show-slide-in").removeClass("hidden-slide-in");
		
	},600);
	
	setTimeout(function(){
		
		$(".slide-in-3").addClass("show-slide-in").removeClass("hidden-slide-in");
		
	},900);
		
	
});


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
		
	},300);
	
	setTimeout(function(){
		
		$(".down-2").addClass("show-down").removeClass("hidden-down");
		
	},600);
	
	setTimeout(function(){
		
		$(".down-3").addClass("show-down").removeClass("hidden-down");
		
	},900);
		
	
});
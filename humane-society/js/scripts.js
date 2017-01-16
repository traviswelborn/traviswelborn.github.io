
$(document).ready(function(){
	
	
	// OPEN/CLOSE SEARCH
	
	$(".open-search").click(function(){
		
		$(".search-wrapper").fadeIn(150,function(){
			
			$(".no-show").addClass("show").removeClass("no-show");
			$(".show").removeAttr("style");
			
		});
		
	});
	
	$(".search-close").click(function(){
		
		$(".search-wrapper").fadeOut(150,function(){
			
			$(".show").addClass("no-show").removeClass("show");
			$(".no-show").removeAttr("style");
			
		});
		
	});
	
	
	// PREVENT FORM SUBMISSION
	
	$(".form").submit(function(e){
		
		e.preventDefault();
		return false;
		
	});
	
	
	// YEAR IN COPYRIGHT 
	
	var date=new Date();
	var year=date.getFullYear();
	
	$(".year").html(year);
	
	
});

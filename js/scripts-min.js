$(".down-1,.down-2,.down-3").addClass("hidden-down"),$(document).ready(function(){var e=new Date,o=e.getFullYear();$(".year").html(o),setTimeout(function(){$(".down-1").addClass("show-down").removeClass("hidden-down")},250),setTimeout(function(){$(".down-2").addClass("show-down").removeClass("hidden-down")},500),setTimeout(function(){$(".down-3").addClass("show-down").removeClass("hidden-down")},750),$(".email-image,.email-text").click(function(){$(".wrapper").addClass("blur").removeClass("no-blur"),$(".form-wrapper").addClass("form-show").removeClass("form-hidden"),$("body").addClass("freeze").removeClass("unfreeze")}),$(".close-hr,.close-button").click(function(){$(".wrapper").addClass("no-blur").removeClass("blur"),$(".form-wrapper").addClass("form-hidden").removeClass("form-show"),$("body").addClass("unfreeze").removeClass("freeze"),$(".name").val()="",$(".subject").val()="",$(".body").val()=""}),$(".send").click(function(){var e=$(".name").val(),o=$(".subject").val(),a=$(".body").val();if(""!=e)var s=encodeURIComponent(e),r="%0D%0A%0D%0ASincerely,%0D%0A"+s;else var r="";if(""!=o)var s=encodeURIComponent(o),d=s;else var d="";if(""!=a)var s=encodeURIComponent(a),n=s;else var n="";var l=$(".send").attr("href");$(".send").attr("href",l+"?subject="+d+"&body="+n+r),$(".name").removeAttr("value"),$(".subject").removeAttr("value"),$(".body").removeAttr("value"),$(".wrapper").addClass("no-blur").removeClass("blur"),$(".form-wrapper").addClass("form-hidden").removeClass("form-show"),$("body").addClass("unfreeze").removeClass("freeze")})});
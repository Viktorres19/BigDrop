/* popup */
/*const DELAY = 500;*/
$(function() {

	$("a.close").on("click", function() {
		$(".feedback-shadow").hide("slow");
	});

	$("a.feedback").on("click", function() {
		$(".feedback-shadow").show("slow");
	});	

/* goods column elignment */
	function setEqualHeight(columns) { 
		var tallestcolumn = 0; 
		columns.each( function() { 
			currentHeight = $(this).height(); 
			if(currentHeight > tallestcolumn) { tallestcolumn = currentHeight; } } ); 
			columns.height(tallestcolumn); 
		};		

	$(document).ready(function() { setEqualHeight($("p.text")); });
/* bx-slider */
  $('.bxslider').bxSlider({
		auto: true,
		mode: 'fade',
		speed: 500

  	});

/* maskinput */
jQuery(function($){
$("#tel").mask("+38(999) 999-9999");   
});

/* burger-menu */
$(document).ready(function(){

$('a.menu-trigger').click(function(){
	$('.menu-line .container nav ul').slideToggle(500);
});	
$(window).resize(function() {
	if($(window).width() > 780) {
		$('.menu-line .container nav ul').removeAttr('style');
	}
});	

});

});

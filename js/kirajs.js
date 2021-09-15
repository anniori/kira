$(document).ready(function () {
 
    /* $('.dropdown').click(function (event) { 
        event.preventDefault();
         $('.dropdown').toggleClass('active');
        $('.dropdown-open').slideToggle();
    }); */
});


/*--------------gotop-------------------*/
$(document).ready(function(){
	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 200) {
			$('#goTop').fadeIn();
		} else {
			$('#goTop').fadeOut();
		}
	});
	//Click event to scroll to top
	$('#goTop').click(function(){
		$('html, body').animate({scrollTop : 0},200);
		return false;
	});
});



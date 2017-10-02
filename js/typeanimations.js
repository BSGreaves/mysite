(function($) {
	$(window).scroll(function() {  
    if(isScrolledIntoView($('#test')) && !testflag)
    {
    	console.log("scrolling")
      var projects = new Typed('#test', {
			  strings: ['>cd projects/^1000 `>ls`'],
			  showCursor: true,
			  typeSpeed: 40,
			  backSpeed: 0,
			  loop: false
			});
			testflag = true;
    }    
	});

	let flags = {

	};

	let testflag = false;

	function isScrolledIntoView(elem) {
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).height();
	    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
	};

})(jQuery);
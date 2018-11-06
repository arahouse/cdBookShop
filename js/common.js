$(function() {

	
	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

})

function showCategory(level, category) {
	$(".product").hide();
	$("*[data-" + level + "=" + category + "]").show();
};

function showCatalog() {
	$(".product").show();
};

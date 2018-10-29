$("#sideMenu nav a").on("click", e => {
	e.preventDefault();

	$(this)
		.parent()
		.addClass("active");
	$(this)
		.parent()
		.siblings()
		.removeClass("active");

	target = $(this).attr("href");

	$(".content > div")
		.not(target)
		.hide();

	$(target).fadeIn(600);
});

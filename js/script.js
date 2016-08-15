$("#tabBanner li a").hover(function () {
			$(this).animate({
				"marginTop": "-38px"
			}, "fast");
		}, function () {
			$(this).animate({
				"marginTop": "0"
			}, "fast");
		});
$(function () {

	var open = "open";
	var closed = "closed";
	var dataGkAreaState = "data-gk-area-state";
    var areaState = "gkAreaState";
	var openClass = "gkOpenClass";
	var openText = "gkOpenText";
	var closeText = "gkCloseText";

    $('['+dataGkAreaState+']').each(function (index) {

    	if ($(this).data(areaState) === open)
    	{
    		$("." + $(this).data(openClass)).show();
    		if ($(this).data().hasOwnProperty(closeText))
    			$(this).text($(this).data(closeText));
    	}
    	else
    	{
    		$("." + $(this).data(openClass)).hide();
    		if ($(this).data().hasOwnProperty(openText))
    			$(this).text($(this).data(openText));
    	}

        $(this).bind("click", function () {
            if ($(this).data(areaState) === open)
            {
                $(this).data(areaState, closed);
            	if ($(this).data().hasOwnProperty(openText))
                	$(this).text($(this).data(openText));
            }
            else
            {
                $(this).data(areaState, open);
            	if ($(this).data().hasOwnProperty(closeText))
                	$(this).text($(this).data(closeText));
            }

            $("." + $(this).data(openClass)).slideToggle();
        });
    });
});

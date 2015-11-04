$(function () {
    $(".gkToggleButton").each(function (index) {
        $(this).bind("click", function () {
            if ($(this).text() === $(this).data("gkOpenText"))
                $(this).text($(this).data("gkClosedText"));
            else
                $(this).text($(this).data("gkOpenText"));

            $("." + $(this).data("gkOpenClass")).slideToggle();
        });
    });
});

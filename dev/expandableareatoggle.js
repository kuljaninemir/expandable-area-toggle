(function($) {
  $(function () {

    var open = "open";
    var closed = "closed";
    var dataGkAreaState = "data-gk-area-state";
    var areaState = "gkAreaState";
    var openClass = "gkOpenClass";
    var openText = "gkOpenText";
    var closeText = "gkCloseText";
    var spanOpenGlyphicon = "gkOpenSpanGlyph";
    var spanCloseGlyphicon = "gkCloseSpanGlyph";

    $('[' + dataGkAreaState + ']').each(function (index) {

        if ($(this).data(areaState) === open) {
            $("." + $(this).data(openClass)).show();
            if ($(this).data().hasOwnProperty(closeText))
                $(this).text($(this).data(closeText));
            if ($(this).data().hasOwnProperty(spanCloseGlyphicon))
                $(this).removeClass($(this).data(spanOpenGlyphicon)).addClass($(this).data(spanCloseGlyphicon));
        }
        else {
            $("." + $(this).data(openClass)).hide();
            if ($(this).data().hasOwnProperty(openText))
                $(this).text($(this).data(openText));
            if ($(this).data().hasOwnProperty(spanOpenGlyphicon))
                $(this).removeClass($(this).data(spanCloseGlyphicon)).addClass($(this).data(spanOpenGlyphicon));
        }

        $(this).bind("click", function () {
            if ($(this).data(areaState) === open) {
                $(this).data(areaState, closed);
                if ($(this).data().hasOwnProperty(openText))
                    $(this).text($(this).data(openText));
                if ($(this).data().hasOwnProperty(spanOpenGlyphicon))
                    $(this).removeClass($(this).data(spanCloseGlyphicon)).addClass($(this).data(spanOpenGlyphicon));
            }
            else {
                $(this).data(areaState, open);
                if ($(this).data().hasOwnProperty(closeText))
                    $(this).text($(this).data(closeText));
                if ($(this).data().hasOwnProperty(spanCloseGlyphicon))
                    $(this).removeClass($(this).data(spanOpenGlyphicon)).addClass($(this).data(spanCloseGlyphicon));
            }

            $("." + $(this).data(openClass)).slideToggle();
        });
    });
  });
})(jQuery); // Fully reference jQuery after this point.

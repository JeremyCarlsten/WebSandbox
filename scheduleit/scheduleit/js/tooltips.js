(function ($) {
    $.fn.tooltips = function (el) {
        var $tooltip,
            $body = $('body'),
            $el;

        return this.each(function (i, el) {

            $el = $(el).attr("data-tooltip", i);

            var $tooltip = $('<div class="tooltip" data-tooltip="' + i + '">' + $el.attr('title') + '<div class="arrow"></div></div>').appendTo("body");
            var linkPosition = $el.position();


            setLocation($tooltip, linkPosition);
            $el.removeAttr("title")
                .hover(function () {
                    $el = $(this);
                    $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']');

                    var linkPosition = $el.position();

                    setLocation($tooltip, linkPosition);

                    $tooltip.addClass("active");

                }, function () {
                    $el = $(this);
                    $tooltip = $('div[data-tooltip=' + $el.data('tooltip') + ']').addClass("out");

                    setTimeout(function () {
                        $tooltip.removeClass("active").removeClass("out");
                    }, 300);

                });

        });

    }

})(jQuery);

function setLocation(tooltip, linkPos) {
    tooltip.css({
        top:linkPos.top + 7,
        left: 65
    });
}
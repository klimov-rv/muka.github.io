
if ($('.hero__beans_animate').length > 0) { 
    $(function () {
        $('.hero__beans_animate').plaxmove({ ratioH: 0.05, ratioV: 0 })
    });
}
if ($('.beans_animate-vertical').length > 0) { 
    $(function () {
        $('.beans_animate-vertical').plaxmove({ ratioH: 0.15, ratioV: 0.05 })
    }); 
}
(function ($) {
    $.fn.plaxmove = function (options) {

        this.defaults = {
            ratioH: 0,
            ratioV: 1,
            invertH: false,
            invertV: false,
            reversed: false
        }

        var settings = $.extend({}, this.defaults, options),
            layer = $(this),
            center = {
                x: $('html').width() / 2 - layer.width() / 2,
                y: $('html').height() / 2 - layer.height() / 2
            },
            y0 = layer.offset().top,
            x0 = 0;

        if (settings.reversed) {

            if (settings.invertH)
                var eqH = function (e) {
                    return x0 - (e.pageY - center.y) * settings.ratioH
                }

            else
                var eqH = function (e) {
                    return x0 + (e.pageY - center.y) * settings.ratioH
                }

            if (settings.invertV)
                var eqW = function (e) {
                    return y0 - (e.pageX - center.x) * settings.ratioV
                }
            else
                var eqW = function (e) {
                    return y0 + (e.pageX - center.x) * settings.ratioV
                }

        }

        else {

            if (settings.invertH)
                var eqH = function (e) {
                    return x0 - (e.pageX - center.x) * settings.ratioH
                }

            else
                var eqH = function (e) {
                    return x0 + (e.pageX - center.x) * settings.ratioH
                }

            if (settings.invertV)
                var eqW = function (e) {
                    return y0 - (e.pageY - center.y) * settings.ratioV
                }
            else
                var eqW = function (e) {
                    return y0 + (e.pageY - center.y) * settings.ratioV
                }

        }

        $('html').on('mousemove', function (e) {

            x = eqH(e)
            y = 0

            $(layer).css({ top: y, left: x })

        })

    };
})(jQuery);
define(function() {

    /**
     * Loader script
     */
    var spinner = (function () {

        var opts
          , $e;

        opts = {
            lines: 13, // The number of lines to draw
            length: 7, // The length of each line
            width: 4, // The line thickness
            radius: 10, // The radius of the inner circle
            rotate: 0, // The rotation offset
            color: '#fff', // #rgb or #rrggbb
            speed: 1, // Rounds per second
            trail: 60, // Afterglow percentage
            shadow: false, // Whether to render a shadow
            hwaccel: false, // Whether to use hardware acceleration
            className: 'spinner', // The CSS class to assign to the spinner
            zIndex: 2e9, // The z-index (defaults to 2000000000)
            top: 'auto', // Top position relative to parent in px
            left: 'auto' // Left position relative to parent in px
        };

        // Public interface
        return {
            create : function () {
                var target;

                // Create DOM element for spinner
                $e = $('<div id="spinner"></div>');

                // Place spinner element in DOM
                $('body').prepend($e);

                // Position element on page
                $e.css({
                    left : ($(document).width() - $e.width()) / 2,
                    top  : ($(document).height() - $e.height()) / 2
                });

                // Get element reference for spinner
                target = document.querySelector('#spinner');

                // Create spinner object
                new Spinner(opts).spin(target);
            },

            show : function () {
                // Check whether element has been created
                if (!$e) {
                    this.create();
                }

                $e.show();
            },

            hide : function () {
                $e.hide();
            }
        }
    })();

    /**
     * jQuery AJAX Shorthand
     *
     * @param url
     * @param params
     * @param callback
     */
    var ajax = function (url, params, callback) {
        spinner.show();

        $.post(url, params, function (res) {
            spinner.hide();

            if (callback && typeof callback === 'function') {
                callback(res);
            }
        });
    };

    return {
        spin : spinner,
        ajax : ajax
    }
});

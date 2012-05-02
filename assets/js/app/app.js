$(document).ready(function () {

    // Global namespace
    window.Y = {};


    Y.LoginView = Backbone.View.extend({
        tagName : 'div',
        id      : 'login',

        events  : {
            'click input[type="submit"]' : 'login'
        },

        initialize : function () {
            this.template = _.template($('#login-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        },

        login : function (e) {
            e.preventDefault();
            ajax('http://app.yumme.se/admin/', $(e.target).parents('form').serialize(), function (res) {
                Y.router.navigate('home', {trigger : true});
            });
        }
    });


    Y.Post = Backbone.Model.extend({});


    Y.PostView = Backbone.View.extend({
        tagName : 'div',
        id      : 'app',

        initialize : function () {
            this.template = _.template($('#app-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        }
    });



    Y.PostCollection = Backbone.Collection.extend({
        model : Y.Post,

        initialize : function () {
            console.log('ass');


        },

        all : function () {
            _.each(this.models, function (model) {
                var view = new Y.PostView({model : model});
                $('body').append(view.render().el);
            });
        }
    });



    Y.Router = Backbone.Router.extend({

        routes : {
            'login' : 'login',
            'home'  : 'home'
        },

        login : function () {
            new Y.LoginView();
        },

        home : function () {
            new Y.PostView();
        }
    });



    var spinner = (function () {

        var opts
          , target
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

        // Public interface, show/hide
        return {
            show : function () {
                $e.show();
            },

            hide : function () {
                $e.hide();
            }
        }
    })();



    var ajax = function (url, params, callback) {
        spinner.show();

        $.post(url, params, function (res) {
            spinner.hide();

            if (callback && typeof callback === 'function') {
                callback(res);
            }
        });
    };



    Y.router = new Y.Router();
    Backbone.history.start();
});
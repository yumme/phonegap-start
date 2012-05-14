define(['vendor/mustache'], function (Mustache) {

    return Backbone.View.extend({
        id      : 'home',

        events  : {
            'click .warn'    : 'warn'
        },

        initialize : function () {
            var _this = this;

            this.model.on('change', function () {
                _this.render();
            });

            this.model.fetch();
        },

        render : function () {
            this.$el.html(Mustache.render($('#home-template').html(), this.model.toJSON()));
            $('#content').html(this.el);
            this.$el.find('h1').fitText(0.9, {maxFontSize: '30px'});
        },

        warn : function () {
            alert('This feature is not yet implemented!');
        }

    });

});

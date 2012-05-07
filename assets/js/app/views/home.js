define(function () {

    return Backbone.View.extend({
        id      : 'home',

        events  : {
            'click .warn'    : 'warn'
        },

        initialize : function () {
            this.template = _.template($('#home-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
            this.$el.find('h1').fitText(0.9, {maxFontSize: '30px'});
        },

        warn : function () {
            alert('This feature is not yet implemented!');
        }

    });

});

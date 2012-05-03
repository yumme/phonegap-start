define(['app/utils', 'router'], function (utils, router) {

    return Backbone.View.extend({

        events  : {
            'click .profile' : 'warn'
        },

        initialize : function () {
            this.template = _.template($('#home-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        },

        warn : function () {
            alert('This feature is not yet implemented!');
        }
    });

});
define(['app/utils', 'router'], function (utils, router) {

    return Backbone.View.extend({
        id : 'home',

        events  : {
            'click .warn'  : 'warn',
            'click .posts' : 'posts'
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
        },

        posts : function () {
            require('router').navigate('post', {trigger : true});
        }
    });

});
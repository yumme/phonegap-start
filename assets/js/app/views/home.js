define(['app/utils', 'router', 'vendor/fittext'], function (utils, router,fittext) {

    return Backbone.View.extend({
        id : 'home',

        events  : {
            'click .warn'   : 'warn',
            'click .posts'  : 'posts',
            'click .create' : 'create'
        },

        initialize : function () {
            this.template = _.template($('#home-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
            $('#content h1').fitText(0.9, {maxFontSize: '30px'});
        },

        warn : function () {
            alert('This feature is not yet implemented!');
        },

        posts : function () {
            require('router').navigate('posts', {trigger : true});
        },

        create : function () {
            require('router').navigate('post', {trigger : true});
        }
    });

});

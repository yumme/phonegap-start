define([], function () {

    return Backbone.View.extend({

        events : {
            'click .home' : 'home'
        },

        initialize : function () {
            this.template = _.template($('#posts-container-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        },

        home : function () {
            require('router').navigate('home', {trigger : true});
        }

    });

});
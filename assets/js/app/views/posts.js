define(['vendor/mustache'], function (Mustache) {

    return Backbone.View.extend({
        tagName   : 'li',

        events : {
            'click' : 'edit'
        },

        initialize : function () {},

        render : function () {
            this.$el.html(Mustache.render($('#post-collection-template').html(), this.model.toJSON()));
            return this;
        },

        edit : function () {
            require('router').navigate('post/' + this.model.cid, {trigger : true});
        }
    });

});
define(['router'], function (router) {

    return Backbone.View.extend({
        tagName   : 'li',

        events : {
            'click' : 'edit'
        },

        initialize : function () {
            this.template = _.template($('#post-collection-template').html());
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        edit : function () {
            require('router').navigate('post/' + this.model.cid, {trigger : true});
        }
    });

});
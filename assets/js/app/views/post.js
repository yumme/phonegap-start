define(['router'], function (router) {

    return Backbone.View.extend({

        events : {
            'click .back'   : 'back',
            'click .update' : 'update'
        },

        initialize : function () {
            this.template = _.template($('#app-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template(this.model.toJSON()));
            $('#content').html(this.el);
        },

        back : function () {
            require('router').navigate('post', {trigger : true});
        },

        update : function () {
            this.model.set({
                title : this.$el.find('form input[type="text"]').val(),
                body  : this.$el.find('form textarea').val()
            });

            this.model.save();
        }
    });

});
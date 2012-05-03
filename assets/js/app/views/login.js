define(['app/utils'], function (utils) {

    return Backbone.View.extend({
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

            utils.ajax('http://176.58.98.109/admin/', $(e.target).parents('form').serialize(), function (res) {
                require('router').navigate('home', {trigger : true});
            });
        }
    });

});


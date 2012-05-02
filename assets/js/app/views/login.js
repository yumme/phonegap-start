define(['app/utils', 'main'], function (utils, router) {

    return Backbone.View.extend({
        tagName : 'div',
        id      : 'login',

        events  : {
            'click input[type="submit"]' : 'login'
        },

        initialize : function () {
            console.log(router);

            this.template = _.template($('#login-template').html());
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        },

        login : function (e) {
            e.preventDefault();
            utils.ajax('http://app.yumme.se/admin/', $(e.target).parents('form').serialize(), function (res) {
                router.navigate('home', {trigger : true});
            });
        }
    });

});


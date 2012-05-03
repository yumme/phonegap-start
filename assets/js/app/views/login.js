define(['app/utils', 'router', 'text!app/templates/login'], function (utils, router, template) {

    return Backbone.View.extend({
        tagName : 'div',
        id      : 'login',

        events  : {
            'click input[type="submit"]' : 'login'
        },

        initialize : function () {
            this.template = _.template(template);
            this.render();
        },

        render : function () {
            this.$el.html(this.template());
            $('#content').html(this.el);
        },

        login : function (e) {
            e.preventDefault();

            utils.ajax('http://app.yumme.se/admin/', $(e.target).parents('form').serialize(), function (res) {
                require('router').navigate('home', {trigger : true});
            });
        }
    });

});


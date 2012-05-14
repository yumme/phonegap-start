define(function () {

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

            var url = 'http://localhost:3000/api/login';

            $.post(url, $(e.target).parents('form').serialize(), function (res) {

                if (res.status === 'OK') {
                    require('router').navigate('home/' + res.id, {trigger : true});
                } else {
                    alert('Login failed!');
                }

            }, 'json');

        }
    });

});


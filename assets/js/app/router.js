define([
    'Underscore',
    'Backbone',
    'app/views/login',
    'app/views/home',
    'app/views/post',
    'app/models/post',
    'app/collections/posts',
], function (undefined, undefined, LoginView, HomeView, PostView, Post, Posts) {

    var Router
      , router;

    Router = Backbone.Router.extend({

        current : {
            collection  : null,
            model       : null,
            view        : null
        },

        routes : {
            'login'     : 'login',
            'home'      : 'home',
            'posts'     : 'posts',
            'post'      : 'post',
            'post/:id'  : 'post'
        },

        login : function () {
            new LoginView();
        },

        home : function () {
            new HomeView();
        },

        posts : function () {
            this.current.collection = new Posts();
            this.current.collection.fetch();
        },

        post : function (id) {
            var model;

            if (id) {
                model = this.current.collection.getByCid(id);
            } else {
                model = new Post();
            }

            new PostView({model : model});
        }

    });

    router = new Router();

    Backbone.history.start();

    router.navigate('login', {trigger : true});

    return router;

});
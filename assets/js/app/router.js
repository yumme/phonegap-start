define([
    'app/views/login',
    'app/views/home',
    'app/views/post',
    'app/views/profile',
    'app/models/post',
    'app/collections/posts',
], function (LoginView, HomeView, PostView, ProfileView, Post, Posts) {

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
            'profile'   : 'profile',
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
            if (this.current.collection instanceof Posts === false) {
                this.current.collection = new Posts();
                this.current.collection.fetch();
            } else {
                this.current.collection.all();
            }
        },

        profile : function () {
            new ProfileView();
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
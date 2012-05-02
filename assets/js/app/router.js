define([
    'Underscore',
    'Backbone',
    'app/views/login'
], function (undefined, undefined, Login) {

    var Router = Backbone.Router.extend({

        routes : {
            'login'     : 'login',
            'home'      : 'posts',
            'post'      : 'posts',
            'post/:id'  : 'post'
        },

        login : function () {
            new Login();
        },

        home : function () {
            //new Y.PostView();
        },

        posts : function () {
            //Y.currentCollection = new Y.PostCollection();
            //Y.currentCollection.fetch();
            //console.log(Y.currentCollection);
        },

        post : function (id) {
            //var model = Y.currentCollection.getByCid(id);
            //new Y.PostView({model : model});
        }
    });

    var router = new Router();
    Backbone.history.start();


    router.navigate('login', {trigger : true});

    return {
        router : router
    }

});
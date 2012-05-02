$(document).ready(function () {

    // Global namespace
    window.Y = {};





    Y.Post = Backbone.Model.extend({
        defaults : {
            details : ''
        }
    });


    Y.PostView = Backbone.View.extend({
        tagName : 'div',
        id      : 'app',

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
            Y.router.navigate('post', {trigger : true});
        },

        update : function () {
            this.model.set({
                title : this.$el.find('form input[type="text"]').val(),
                body  : this.$el.find('form textarea').val()
            });

            this.model.save();
        }
    });



    Y.PostCollectionView = Backbone.View.extend({
        tagName   : 'li',
        className : 'ugh',

        events : {
            'click' : 'edit'
        },

        initialize : function () {
            this.template = _.template($('#post-collection-template').html());
        },

        render : function () {
            console.log(this.model);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        edit : function () {
            Y.router.navigate('post/' + this.model.cid, {trigger : true});
        }
    });



    Y.PostCollection = Backbone.Collection.extend({
        model : Y.Post,
        url   : 'http://app.yumme.se/admin/blog/',

        initialize : function () {
            this.on('reset', function () {
                this.all();
            });
        },

        all : function () {
            var $el = $('<ul></ul>');

            _.each(this.models, function (model) {
                var view = new Y.PostCollectionView({model : model});
                $el.append(view.render().el);
            });

            $('#content').html($el);
        }
    });


});
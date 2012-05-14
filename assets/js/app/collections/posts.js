define(['app/models/post', 'app/views/posts', 'app/views/post-container'], function (Post, Posts, PostContainer) {

    return Backbone.Collection.extend({
        model : Post,
        url   : 'http://localhost:3000/api/blog/',

        initialize : function () {
            this.on('reset', function () {
                this.all();
            });
        },

        all : function () {
            new PostContainer();

            var $el = $('ul');

            _.each(this.models, function (model) {
                var view = new Posts({model : model});
                $el.append(view.render().el);
            });
        }
    });

});
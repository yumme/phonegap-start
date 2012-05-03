define(['app/models/post', 'app/views/posts'], function (Post, Posts) {

    return Backbone.Collection.extend({
        model : Post,
        url   : 'http://app.yumme.se/admin/blog/',

        initialize : function () {
            this.on('reset', function () {
                this.all();
            });
        },

        all : function () {
            var $el = $('<ul></ul>');

            _.each(this.models, function (model) {
                var view = new Posts({model : model});
                $el.append(view.render().el);
            });

            $('#content').html($el);
        }
    });

});
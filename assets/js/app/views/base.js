define(function () {

    return Backbone.View.extend({
        shuttle : function (selector, target, json) {
            this.$el.html(_.template($(selector).html(), json)());
            $(target).html(this.el);
        }
    });

});
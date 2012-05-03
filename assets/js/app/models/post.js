define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        defaults : {
            details : ''
        }
    });

});
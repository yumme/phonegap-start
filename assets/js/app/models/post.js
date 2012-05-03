define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        url : '',

        defaults : {
            title   : '',
            body    : '',
            details : ''
        }
    });

});
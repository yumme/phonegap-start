define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        urlRoot : 'http://localhost:3000/api/blog',

        defaults : {
            title   : '',
            body    : '',
            details : ''
        }
    });

});
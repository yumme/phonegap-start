define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        urlRoot : 'http://176.58.98.109/admin/blog/',

        defaults : {
            title   : '',
            body    : '',
            details : ''
        }
    });

});
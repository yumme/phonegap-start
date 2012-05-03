define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        urlRoot : 'http://app.yumme.se/admin/blog/',

        defaults : {
            title   : '',
            body    : '',
            details : ''
        }
    });

});
define(function () {

    return Backbone.Model.extend({
        idAttribute : '_id',

        url : 'http://app.yumme.se/admin/blog/',

        defaults : {
            title   : '',
            body    : '',
            details : ''
        }
    });

});
define(function () {

    return Backbone.Model.extend({

        urlRoot : 'http://176.58.98.109/api/users',

        idAttribute : '_id'

    });

});
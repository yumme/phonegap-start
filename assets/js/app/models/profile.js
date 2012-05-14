define(function () {

    return Backbone.Model.extend({

        urlRoot : 'http://localhost:3000/api/users',

        idAttribute : '_id'

    });

});
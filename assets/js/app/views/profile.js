define(['app/views/base'], function (View) {

    return View.extend({
        id : 'profile',

        initialize : function () {
            this.shuttle('#profile-template', '#content');
        },

        events : {

        }

    });

});
require.config({
    paths : {
        jQuery      : 'vendor/jquery',
        Underscore  : 'vendor/underscore',
        Backbone    : 'vendor/backbone'
    }
});

require(['app/utils', 'app/router'], function(utils, router) {

    console.log(router);

    return {
        router : router
    }

});
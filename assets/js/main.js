require.config({
    paths : {
        jQuery      : 'vendor/jquery',
        Underscore  : 'vendor/underscore',
        Backbone    : 'vendor/backbone',
        router      : 'app/router'
    }
});

require([
    'app/utils',
    'router',
], function() {});
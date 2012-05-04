require.config({
    paths : {
        jQuery      : 'vendor/jquery',
        Underscore  : 'vendor/underscore',
        Backbone    : 'vendor/backbone',
        FitText     : 'vendor/fittext',
        router      : 'app/router'
    }
});

require([
    'app/utils',
    'router',
], function() {});

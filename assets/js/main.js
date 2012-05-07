require.config({
    paths : {
        jQuery      : 'vendor/jquery',
        Underscore  : 'vendor/underscore',
        Backbone    : 'vendor/backbone',
        fitText     : 'vendor/fittext',
        Spinner     : 'vendor/spin',
        router      : 'app/router'
    }
});

require([
    'order!jQuery',
    'order!Underscore',
    'order!Backbone',
    'order!fitText',
    'order!Spinner',
    'order!router',
], function() {});

require.config({
    paths : {
        Phonegap    : 'vendor/phonegap',
        jQuery      : 'vendor/jquery',
        Underscore  : 'vendor/underscore',
        Backbone    : 'vendor/backbone',
        fitText     : 'vendor/fittext',
        Spinner     : 'vendor/spin',
        URI         : 'vendor/uri',
        Base64      : 'vendor/base64',
        router      : 'app/router'
    }
});

require([
    'order!Phonegap',
    'order!jQuery',
    'order!Underscore',
    'order!Backbone',
    'order!fitText',
    'order!Spinner',
    'order!URI',
    'order!Base64',
    'order!router',
    'order!app/utils'
], function() {



});

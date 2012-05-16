require.config({
    paths : {
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

    $.ajaxSetup({
        beforeSend : function (jqXHR, settings) {
            if (URI(settings.url).path() === '/api/login') {
                localStorage.setItem('email', $('input[name="email"]').val());
                localStorage.setItem('password', $('input[name="password"]').val());
            } else {
                var auth = Base64.encode(localStorage.getItem('email') + ':' + localStorage.getItem('password'));
                jqXHR.setRequestHeader('Authorization', 'Basic ' + auth);
            }
        },
        statusCode : {
            401 : function () {
                alert('Not authenticated/authentication failed');
            },
            500 : function () {
                alert('API endpoint error');
            }
        }
    });

});

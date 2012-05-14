define(['vendor/mustache'], function (Mustache) {

    return Backbone.View.extend({

        events : {
            'click .back'   : 'back',
            'click .save'   : 'save',
            'click .camera' : 'camera'
        },

        initialize : function () {
            this.render();
        },

        render : function () {
            this.$el.html(Mustache.render($('#app-template').html(), {
                model   : this.model.toJSON(),
                action  : this.model.isNew() ? 'Create' : 'Update'
            }));

            $('#content').html(this.el);
        },

        back : function () {
            require('router').navigate('posts', {trigger : true});
        },

        save : function () {
            this.model.set({
                title : this.$el.find('form input[type="text"]').val(),
                body  : this.$el.find('form textarea').val()
            });

            this.model.save();
        },

        camera : function () {
            var pictureSource;   // picture source
            var destinationType; // sets the format of returned value

            // Wait for Cordova to connect with the device
            //
            document.addEventListener("deviceready",onDeviceReady,false);

            // Cordova is ready to be used!
            //
            function onDeviceReady() {
                pictureSource=navigator.camera.PictureSourceType;
                destinationType=navigator.camera.DestinationType;

                alert('GO GO GO !');
            }

            navigator.camera.getPicture(onSuccess, onFail, {
                quality: 20,
                destinationType : destinationType.DATA_URL
            });

            function onSuccess(imageData) {
                var image = document.getElementById('myImage');
                image.src = "data:image/jpeg;base64," + imageData;
            }

            function onFail(message) {
                alert('Failed because: ' + message);
            }
        }
    });

});
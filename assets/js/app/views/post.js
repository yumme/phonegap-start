define(['router'], function (router) {

    return Backbone.View.extend({

        events : {
            'click .back'   : 'back',
            'click .save'   : 'save',
            'click .camera' : 'camera'
        },

        initialize : function () {
            this.template = _.template($('#app-template').html());
            this.render();
        },

        render : function () {
            this.$el.html({
                model   : this.template(this.model.toJSON()),
                isNew   : this.model.isNew()
            });

            this.$el.html(this.template({
                model   : this.model.toJSON(),
                isNew   : this.model.isNew()
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
            navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
                destinationType: Camera.DestinationType.DATA_URL
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
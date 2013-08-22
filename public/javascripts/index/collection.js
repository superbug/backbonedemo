var MyApp = MyApp || {};

MyApp.Collection = (function(app) {

    var exports = {};

    exports.categories = Backbone.Collection.extend({
        
        initialize: function() {

        }

    });

    exports.cars = Backbone.Collection.extend({
        
        model: app.Model.car,

        url: '/cars'

    });

    return exports;

})(MyApp);
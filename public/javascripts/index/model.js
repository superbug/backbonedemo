var MyApp = MyApp || {};

MyApp.Model = (function(app) {

    var exports = {};

    exports.category = Backbone.Model.extend({
        
        initialize: function() {

        }

    });

    exports.car = Backbone.Model.extend({
        
        initialize: function(attr) {
            
        },

        validate: function(attr) {
            var result;
            if (attr.name == '') {
                result = 'name required';
            }
            if (attr.color == '') {
                result = 'color required';
            }
            return result;
        }

    });

    return exports;

})(MyApp);
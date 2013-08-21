var MyApp = MyApp || {};

MyApp.Router = (function(app) {

    var exports = {};

    exports.index = Backbone.Router.extend({
        
        routes: {
            '': 'showAll',
            '!/:category': 'showCategory'
        },

        showAll: function() {
            console.log('all');
        },

        showCategory: function(category) {
            console.log(category);
        }

    })

    return exports;

})(MyApp);
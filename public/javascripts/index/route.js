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
            if (app.carCollectionInstance) {
                app.carCollectionInstance.reset([]);
                $('#carlist tbody tr:gt(0)').remove('');
            }
            app.carCollectionInstance = new app.Collection.cars();
            app.carCollectionInstance.url = '/cars/' + category;
            app.carListViewInstance = new app.View.carList();
        }

    })

    return exports;

})(MyApp);
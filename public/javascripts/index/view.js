var MyApp = MyApp || {};

MyApp.View = (function(app) {

    var exports = {};

    exports.categoryView = Backbone.View.extend({
        
        el: '#category',

        initialize: function() {

        },

        render: function() {

        }

    });

    exports.carList = Backbone.View.extend({
        
        el: '#carlist',

        events: {
            'click #search': 'searchCar'
        },

        initialize: function() {
            this.input = this.$el.find('input[name="filterCar"]');
            this.listenTo(app.carCollectionInstance, 'add', this.addCar);
            this.listenTo(app.carCollectionInstance, 'reset', this.addAllCars);
            // this.listenTo(app.carCollectionInstance, 'all', this.render);
            app.carCollectionInstance.fetch({reset: true});
        },

        render: function() {

        },

        addCar: function(carModel) {
            var car = new app.View.car({model: carModel});
            this.$el.find('.list tbody').append(car.render().el);
        },

        removeCar: function(carModel) {
            carModel.destroy();
        },

        addAllCars: function() {
            app.carCollectionInstance.each(this.addCar, this);
        },

        searchCar: function() {

        }

    });

    exports.car = Backbone.View.extend({

        tagName:  'tr',

        events: {
            'click .add': 'addCar',
            'click .delete': 'deleteCar'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.deleteCar);
        },

        render: function() {
            this.$el.html(_.template($('#car-template').html(), this.model.toJSON()));
            return this;
        },

        deleteCar: function() {
            console.log('dddddddddd');
            console.log(this);
            this.remove();
        }

    });

    return exports;


})(MyApp);
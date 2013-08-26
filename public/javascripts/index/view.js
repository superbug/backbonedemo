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
            'click .edit': 'editCar',
            'click .delete': 'destroyCar'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.deleteCar);
        },

        render: function() {
            console.log(9);
            this.$el.html(_.template($('#car-template').html(), this.model.toJSON()));
            return this;
        },

        destroyCar: function() {
            this.model.destroy();
        },

        deleteCar: function() {
            this.remove();
        },

        editCar: function() {
            var dialogView = new app.View.carDialog({model: this.model});
        }

    });

    exports.carDialog = Backbone.View.extend({

        el:  '#dialog',

        events: {
            'change input': 'updateModel'
        },

        initialize: function(param) {
            this.model = param.model; 
            this.model.on('invalid', this.invalid, this);
            this.render();   
        },

        render: function() {
            var _this = this;
            this.$el.html($(_.template($('#dialog-template').html(), this.model.toJSON()))).dialog({
                width: 400,
                buttons: {
                    'save': function() {
                        _this.model.save();
                        $(this).dialog('close');
                    }
                }
            });
        },

        updateModel: function(e) {
            this.model.set($(e.target).attr('name'), $(e.target).val());
        },

        invalid: function(model, error) {
            alert(error);
        }

    });

    return exports;


})(MyApp);
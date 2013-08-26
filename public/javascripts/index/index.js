var MyApp = MyApp || {};

MyApp.init = function() {
    var temp = new this.Router.index();
    Backbone.history.start();
};

$(function() {
    MyApp.init();
});

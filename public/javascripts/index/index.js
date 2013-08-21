var MyApp = MyApp || {};

MyApp.init = function() {
    var temp = new this.Router.index();
    Backbone.history.start();
};

$(function() {
    MyApp.init();
});




$(function() {
    $('#btn').click(function() {
        $('#dialog').dialog({
            buttons: {
                '关闭': function() {
                    $(this).dialog('close');
                }
            }
        });
    }); 
});
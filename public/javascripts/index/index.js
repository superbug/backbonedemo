$(function() {
        $('#btn').click(function() {
            $('#dialog').dialog({
                buttons: {
                    ' 关闭': function() {
                        $(this).dialog('close');
                    }
                }
            });
        }); 
});
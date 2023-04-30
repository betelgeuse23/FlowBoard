let part = 0;
$(function () {
    $(".column").sortable({
        items: ".portlet",
        connectWith: ".column",
        cancel: ".portlet-header",
        placeholder: "portlet-placeholder",
        start: function(e, ui) {
            ui.helper.first().addClass("pd");
        },
        stop: function(e, ui) {
            $(".pd").removeClass("pd");
            $(".portlet").each(function () {
                console.log($(this).parent().attr('id') + ": " + $(this).attr('id') + ": " + $(this).index())
            });
        }
    });
    $(".add").draggable({
        connectToSortable: ".column",
        helper: function()	{
            let p = $(`<div class="portlet style="">
                            <div class="ps"><span class="pn portlet-header">New task</span><span class="tag">design</span></div>
                            <hr>
                            <div class="ps"><span>Executor:</span><span class="icon">NN</span></div>
                        </div>`);
            p.css({'width': '200px', 'height': 'auto'});
            p.attr('id', part++);
            return p;
        },
        start: function()	{
            $(this).addClass("ddh");
        },
        stop: function(event, ui) {
            $(this).removeClass("ddh");
            ui.helper.first().removeAttr('style');
        }
    });
    $(".add").droppable({
        accept: ".portlet",
        classes: {
            "ui-droppable-hover": "ddh"
        },
        drop: function( event, ui ) {
            ui.helper.first().remove();
        }
    });
});
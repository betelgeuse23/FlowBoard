$( function() {
    $("#dd").datepicker();
    $("#ex").selectmenu();
    $( ".pb" ).progressbar({
        max : 100
    });
} );
function addProgress() {
    let num = Number($('#num').val());
    if(num) {
        $('.pb').progressbar('value', $('#pb').progressbar('value') + num);
        $('#met').text(Number($('#met').text()) + num);
    }
}
$(document).ready(function () {

    $(".data").click(function () {
        $(this).unbind('click.zoomNotClickable');
        $("#zoom").zoomTarget();
    })

});
$(document).ready(function(){

    $(".lang").click(function () {
        $(this).addClass("activeLang");

        $(this).parents('.langs').siblings('.langs').find('.lang').removeClass('activeLang');
    })

});
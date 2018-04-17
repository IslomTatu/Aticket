$(document).ready(function(){
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal({
        dismissible: true,
        complete: function () {
            $(".registration").parent().css("display", "block");
            $("#registration").css("display", "none");


            $("#room-scheme").empty();
            $(".loader1").fadeIn();
        }
    });


});
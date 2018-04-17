$(document).ready(function () {

    var password = document.getElementById("password1")
        , confirm_password = document.getElementById("cpassword");

    function validatePassword(){
        if(password.value != confirm_password.value) {
            confirm_password.setCustomValidity("Passwords Don't Match");
        } else {
            confirm_password.setCustomValidity('');
        }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;


    $(".user").click(function () {
       $(".userProfile").show();
    }).mouseleave(function () {
        $('.userProfile').hide();
    });

    $(".registration").click(function () {

        $(this).parent().css("display", "none");
        $("#registration").css("display", "block");

    });
    $(".iHave,.regBack").click(function () {
        $(this).parent().css("display", "none");
        $(".modal-content").show();
    });



    jQuery(function($){
        $("#tel").mask("+(998) 99 999 99 99");

    });

});
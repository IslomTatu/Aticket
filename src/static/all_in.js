//  ------------------AJAX-ROOM.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------

$(document).ready(function () {

    $(".data").click(function () {
        $(window).load(function () {
            $('.loader').fadeOut();
        });
        $("circle").each(function () {
            if($(this).attr('data-price')) {
                $(this).addClass("enabled heyo");
            }
            else $(this).addClass("disabled");
        });
        $(".enabled").on({
            mouseenter: function() {
                if($(this).attr('data-price')) {
                    $(".description").addClass("active")
                        .html($(this).attr("data-price"));
                }
            },
            mouseleave: function () {
                $(".description").removeClass("active");
            }
            // click: function () {
            //     var count = parseInt($("h3.count").text());
            //     var ticket = 0;
            //
            //     if ($(this).attr('data-price'))
            //         ticket = parseInt($(this).attr("data-price").slice(0, -1));
            //
            //
            //     var count = count + ticket;
            //     $(".count").html(count);
            //     $(this).removeClass("enabled");
            //     $(this).removeClass("heyo");
            //     //alert($(this).parent().html());
            //     $(this).addClass("bought");
            // }
        });

        $("#hall-scheme").on("mouseover", function(e) {
            var tip = $("#hall-scheme").get(0);
            var viewPort = tip.offsetWidth;
            var screenSize = screen.width;
            var minus = (screenSize - viewPort)/2;
            $(".description").css({
                left: e.screenX -227,
                top: e.screenY -115
            });
        });
    });

    $(".data").hover(
        function() {
            $(".tooltipForPrice").addClass("active")
                .html($(this).attr("data-tooltip"));
        },
        function() {
            $(".tooltipForPrice").removeClass("active");
        }
    );

    $(".table-in").on("mousemove", function(e) {
        $(".tooltipForPrice").css({
            left: e.pageX,
            top: e.pageY -70
        });
    });



    $('circle').click(function () {
        if(!($(this).hasClass('disabled')))
            $(this).toggleClass("bought");
    });

});





//  ------------------AJAX-CHECK.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------


$(document).ready(function () {


    $("#checkAjax").click(function () {

        var username = $('#login1').val();
        var password = $('#password').val();
        var checked = $("input[type=checkbox]").prop('checked');

        var http = $.ajax({
            url: 'http://192.168.0.138/login',
            type: "POST",
            data: {email: username, password: password, remember: checked},
            success: function (result) {
                if (result.success) {
                    // data.redirect contains the string URL to redirect to
                    window.location.href = "/";
                }
                else {
                    // data.form contains the HTML for the replacement form
                    $("#errorEmail").attr("data-error", result.message).addClass("active");
                    $("#login1").addClass("invalid");

                    $("#errorPassword").attr("data-error", result.message).addClass("active");
                    $("#password").addClass("invalid");
                }
            }
        });
    });


    $("#submit").click(function (e) {
        var uname = $("#uname").val();
        var uemail = $("#cemail").val();
        var tel = $("#tel").val();
        var password = $("#password1").val();
        var password_confirm = $("#cpassword").val();

        e.preventDefault();

        var reg = $.ajax({
            url: 'http://192.168.0.138/register',
            type: "POST",
            data: {email: uemail, name: uname, password: password, password_confirmation: password_confirm, phone_number: tel},
            success: function (result) {
                console.log(result);

                if(!(result.success)){
                    $.each(result.messages, function (key, value) {
                        console.log(key+": "+ value);
                        if(key === "email"){
                            $("#cemail").addClass("invalid");
                            $("#forEmail").attr("data-error", value).addClass("active");
                        }
                        else if(key === "password"){
                            $("#password1").addClass("invalid");
                            $("#forPassword").attr("data-error", value).addClass("active");
                        }
                        else if(key === "phone_number"){
                            $("#tel").addClass("invalid");
                            $("#forTel").attr("data-error", value).addClass("active");
                        }

                    })
                }

                else{
                    window.location.href = "/";
                }

            }
        });
    });

});



//---------------------CAROUSEL.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------



$(document).ready(function(){
    $('.items-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<div class="prev"><span class="fa fa-angle-left"></span><span class="sr-only">Prev</span></div>',
        nextArrow: '<div class="next"><span class="fa fa-angle-right"></span><span class="sr-only">Next</span></div>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });

    $('.picture').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.pictures'
    });
    $('.pictures').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.picture',
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 3,
                    infinite: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});



//---------------------KORZINKA.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------



$(document).ready(function () {
    $(".paymentType").click(
        function () {
            $(this).siblings().children("img").removeClass("chosen");
            $(this).children("img").toggleClass("chosen");

        });

});


//---------------------LOGIN.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------

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


    $("#formValidate1").validate({
        rules: {
            uname: {
                required: true,
                minlength: 5
            },
            cemail: {
                required: true,
                email:true
            },
            password: {
                required: true,
                minlength: 5
            },
            cpassword: {
                required: true,
                minlength: 5,
                equalTo: "#password1"
            }
        },
        //For custom messages
        messages: {
            uname:{
                required: "Enter a username",
                minlength: "Enter at least 5 characters"
            },
            password:{
                minlength: "Your password must be at least 5 characters"
            },
            cpassword:{
                minlength: "Your password must be at least 5 characters",
                equalTo: "Please enter the same password as above"
            }
        },
        errorPlacement: function(error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error)
            } else {
                error.insertAfter(element);
            }
        }
    });

});





//---------------------MAIN.JS----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------


$(document).ready(function () {
    $(window).load(function () {
        $('.loader').fadeOut();
    });
    $('.button-collapse').sideNav({
        closeOnClick: true
    });

    $('.viewMore').click(function () {

        $('.viewMore').css("display", "none");
        $('.toToggle').show();
    });

    $('tr').slice(0,4).show();
    $('#viewMore').on('click', function (e) {
        e.preventDefault();
        $("tr:hidden").slice(0,4).slideDown();
        if($("tr:hidden").length == 0){
            $('#viewMore').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $('#viewMore').offset().top - 500
        }, 1500);
    });

    $('.datepicker').pickadate({
        selectMonths : true,
        selectYears : 15
    });


    $('.fa-bookmark').click(function () {
        $(this).toggleClass("saved");
        if($(this).hasClass("saved")){
            Materialize.toast("saved", 2000);
        }
        else {

            Materialize.toast("removed", 2000);
            $(this).first()[0].M_Toast.remove();
        }
    });

    $('.save').click(function () {
        $(this).children().toggleClass("saved");
        if ($(this).children().hasClass("saved")){
            Materialize.toast("saved", 2000)
        }
        else {
            Materialize.toast("removed", 2000);
            $(this).first()[0].M_Toast.remove();
        }
    });



    $('.modal').modal({
        dismissible: true,
        complete: function () {
            $(".registration").parent().css("display", "block");
            $("#registration").css("display", "none");
        }
    });


});






//---------------------VUE.JS for background slider----------------------------------
//------------------------------------------------------------------
//-------------------------------------------------------------------



Vue.directive('background', {
    bind: function(el, binding, vnode){
        el.style.backgroundColor = '#' + Math.random().toString().slice(2,8);
        el.style.color = 'white';
    }
});

new Vue({
    el: '#slide'
});

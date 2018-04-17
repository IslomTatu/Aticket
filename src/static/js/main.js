
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


});
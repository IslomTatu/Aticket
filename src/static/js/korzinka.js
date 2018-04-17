$(document).ready(function () {

    var something =  function () {

    };



    $(".paymentType").click(
        function () {
            $(this).siblings().children("img").removeClass("chosen");
            $(this).children("img").toggleClass("chosen");

        });

    $("#buy").click(function () {



        $("circle").each(function () {
            if($(this).hasClass("bought")){
                console.log($(this).attr("data-id")+"-------");
            }
            else {
                console.log('------------'+ $(this).parent().attr("id"))
            }
        })

    })






});
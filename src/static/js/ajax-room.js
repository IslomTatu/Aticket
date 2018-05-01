$(document).ready(function () {
    $(".data").click(function () {

        $(".back").hide();

        var enterFirst = true;

        $("#room-scheme1").empty().show();
        $("#room-scheme").empty().hide();
        $(".count").text("0");

        var instance = $(".data").attr("data-instance");
        var hall = $(this).attr("data-hall");

        $.getJSON("../../"+ hall +".json",  function (data) {

            if(data.info) {
                //$("#imgAction").attr("src", data.info.poster);

                var dayAction = new Date(data.info.date);

                var timeAction = dayAction.getHours();
                var minuteAction = dayAction.getMinutes();
                console.log(data.info.date);
                console.log(timeAction + " : " + minuteAction);
                $("#nameAction").text(data.info.title);
                $("#whereAction").text(data.info.hall);
                $("#timeAction").text(timeAction + " : " + minuteAction);
            }

            $("#room-scheme1").load("../../"+data.hallInfo+".svg", function () {
                $(".loader1").fadeOut();
                $("path").on('click', function () {
                    $(".back").show();

                    $("#room-scheme1").hide();
                    $("#room-scheme").show();

                    var id = $(this).attr("id");

                    if(Object.keys(data.hallScheme[id][0]).length > 50){
                        $("#room-scheme").css("width", "2500px");
                    }
                    else{
                        $("#room-scheme").css("width", "800px")
                    }
                    console.log(Object.keys(data.hallScheme[id][0]).length);
                    $.each(data.hallScheme[id], function (key, value) {
                            var nextRow = true;
                            //console.log(value.length);

                            for(var v in value) {
                                //console.log(v);
                                //console.log(value[v].place + " in row " + value[v].row);
                                if(nextRow && value[v].row) {
                                    $("#room-scheme").append("<span style='margin-right: 2%'>ryad: " + (value[v].row) + "</span>");
                                    nextRow = false;
                                }
                                var svg = $("<svg height=\"20\" width=\"20\"> <circle cx=\"10\" cy=\"10\" r=\"5\" stroke=\"black\" stroke-width=\"1\" fill=\"#31D61E\"/> </svg>");
                                var empty = $("<svg class='emptySvg' height='20' width='20' fill='white'>");
                                svg.attr("id", "row_"+value[v].row+"_"+value[v].place);
                                if(value[v].empty){
                                    $("#room-scheme").append(empty);
                                }
                                else {
                                    $("#room-scheme").append(svg);

                                    $("#row_" + value[v].row + "_" + value[v].place).find('circle').attr({
                                        "data-price": value[v].price,
                                        "data-status": value[v].status,
                                        "data-id": value[v].id,
                                        "data-place": value[v].place,
                                        "data-row": value[v].row,
                                        "data-tipso": "Цена: " + value[v].price +"" + "\nМесто: "+value[v].place

                                    });
                                }

                            }

                            $("#room-scheme").append("<br/>");

                        });

                        $("circle").each(function () {
                            if($(this).attr('data-status')==="1" || $(this).attr('data-status')==="0") {
                                $(this).addClass("enabled heyo top-tipso");
                                jQuery(".top-tipso").tipso({
                                    titleContent: "",
                                    position: "top",
                                    color: "black",
                                    background: "#eeeeee",
                                    width: "100",
                                    speed: 100,
                                    offsetY: 0,
                                    offsetX: 0
                                });
                            }
                            else $(this).addClass("disabled");
                        });
                        $("circle").click(function () {
                            var priceOfAll = 0;

                            if(!($(this).hasClass('disabled'))) {
                                $(this).toggleClass("bought");

                                var clicked = $(this).attr("data-status");

                                if(clicked === "1") {
                                    $(this).attr("data-status", "0");
                                    //console.log("if work");
                                }
                                else {
                                    $(this).attr("data-status", "1");
                                    //console.log("else work")
                                }

                            }
                            $("circle").each(function () {
                                if($(this).hasClass("bought")){
                                    priceOfAll += parseInt($(this).attr("data-price"));
                                }
                            });

                            $(".count").text(priceOfAll);

                        });


                });

                $(".back").click(function () {
                    $(".count").text('0');
                    $(".back").hide();
                    $("#room-scheme").hide();
                    $("#room-scheme1").show();
                    $("#room-scheme").empty();



                })
            })
        })

        // $("#room-scheme1").load('../../'+ $(this).attr('data-hall') +'.svg', function () {
        //     $("#room-scheme1").show();
        //     $("#room-scheme").hide();
        //     $("path").click(function () {
        //         $("#room-scheme1").hide();
        //         $("#room-scheme").show();
        //         $.getJSON("../../"+ value.hallInfo +".json", function (data) {
        //
        //             if(data.info) {
        //                 $("#imgAction").attr("src", data.info.poster);
        //
        //                 var dayAction = new Date(data.info.date);
        //
        //                 var timeAction = dayAction.getHours();
        //                 var minuteAction = dayAction.getMinutes();
        //                 console.log(data.info.date);
        //                 console.log(timeAction + " : " + minuteAction);
        //                 $("#nameAction").text(data.info.title);
        //                 $("#whereAction").text(data.info.hall);
        //                 $("#timeAction").text(timeAction + " : " + minuteAction);
        //             }
        //             // $("#room-scheme").append("<div id='ryad' style='border: 1px solid black; display: inline !important; float: left'></div>");
        //             // $("#room-scheme").append("<div id='mesto' style='display: inline; float: right'></div>")
        //             $.each(data, function (key, value) {
        //                 var nextRow = true;
        //                 //console.log(value.length);
        //                 //console.log(value);
        //                 for(var v in value) {
        //                     //console.log(value[v].place + " in row " + value[v].row);
        //                     if(nextRow && value[v].row) {
        //                         $("#room-scheme").append("<span style='margin-right: 2%'>ryad: " + (value[v].row) + "</span>");
        //                         nextRow = false;
        //                     }
        //                     var svg = $("<svg height=\"20\" width=\"20\"> <circle cx=\"10\" cy=\"10\" r=\"5\" stroke=\"black\" stroke-width=\"1\" fill=\"#31D61E\"/> </svg>");
        //                     var empty = $("<svg class='emptySvg' height='20' width='20' fill='white'>");
        //                     svg.attr("id", "row_"+value[v].row+"_"+value[v].place);
        //                     if(value[v].empty){
        //                         $("#room-scheme").append(empty);
        //                     }
        //                     else {
        //                         $("#room-scheme").append(svg);
        //
        //                     }
        //
        //
        //                      $("#row_" + value[v].row + "_" + value[v].place).find('circle').attr({
        //                          "data-price": value[v].price,
        //                          "data-status": value[v].status,
        //                          "data-id": value[v].id,
        //                          "data-place": value[v].place,
        //                          "data-row": value[v].row,
        //                          "data-tipso": "Цена: " + value[v].price +"" + "\nМесто: "+value[v].place
        //
        //                      });
        //
        //                 }
        //
        //                 $("#room-scheme").append("<br/>");
        //
        //             });
        //             $('.loader1').fadeOut();
        //
        //
        //             $("circle").each(function () {
        //                 if($(this).attr('data-status')==="1") {
        //                     $(this).addClass("enabled heyo top-tipso");
        //                     jQuery(".top-tipso").tipso({
        //                         titleContent: "",
        //                         position: "top",
        //                         color: "black",
        //                         background: "#eeeeee",
        //                         width: "100",
        //                         speed: 100
        //                     });
        //                 }
        //                 else $(this).addClass("disabled");
        //             });
        //             $("circle").click(function () {
        //                 var priceOfAll = 0;
        //
        //                 if(!($(this).hasClass('disabled'))) {
        //                     $(this).toggleClass("bought");
        //
        //                     var clicked = $(this).attr("data-status");
        //
        //                     if(clicked === "1") {
        //                         $(this).attr("data-status", "0");
        //                         //console.log("if work");
        //                     }
        //                     else {
        //                         $(this).attr("data-status", "1");
        //                         //console.log("else work")
        //                     }
        //
        //                 }
        //                 $("circle").each(function () {
        //                     if($(this).hasClass("bought")){
        //                         priceOfAll += parseInt($(this).attr("data-price"));
        //                     }
        //                 })
        //
        //                 $(".count").text(priceOfAll);
        //
        //             });
        //
        //         }).error(function () {
        //             $("#hall-scheme").empty().css("text-align", "center").append("<h5 style='width: 100%'>Sorry hall is not found</h5>")
        //         });
        //
        //
        //         $(".back").click(function () {
        //             $("#room-scheme").hide();
        //             $("#room-scheme1").show();
        //         });
        //
        //     });
        //
        // });

        // $.getJSON("../../room.json", function (data) {
        //
        //     if(data.info) {
        //         $("#imgAction").attr("src", data.info.poster);
        //
        //         var dayAction = new Date(data.info.date);
        //
        //         var timeAction = dayAction.getHours();
        //         var minuteAction = dayAction.getMinutes();
        //         console.log(data.info.date);
        //         console.log(timeAction + " : " + minuteAction);
        //         $("#nameAction").text(data.info.title);
        //         $("#whereAction").text(data.info.hall);
        //         $("#timeAction").text(timeAction + " : " + minuteAction);
        //     }
        //
        //     $.each(data, function (key, value) {
        //         console.log(value.length);
        //         $("#room-scheme").append("<span style='position: relative; top: -15px; right: 10px'>ryad: "+(key+1)+"</span>");
        //         for(var v in value) {
        //             //console.log(value[v].place + " in row " + value[v].row);
        //
        //             var svg = $("<svg height=\"20\" width=\"20\"> <circle cx=\"10\" cy=\"10\" r=\"5\" stroke=\"black\" stroke-width=\"1\" fill=\"#31D61E\"/> </svg>");
        //             svg.attr("id", "row_"+value[v].row+"_"+value[v].place);
        //             $("#room-scheme").append(svg);
        //
        //
        //              $("#row_" + value[v].row + "_" + value[v].place).find('circle').attr({
        //                  "data-price": value[v].price,
        //                  "data-status": value[v].status,
        //                  "data-id": value[v].id,
        //                  "data-place": value[v].place,
        //                  "data-row": value[v].row,
        //                  "data-tipso": "Цена: " + value[v].price +"" + "\nМесто: "+value[v].place
        //
        //              });
        //
        //         }
        //
        //         $("#room-scheme").append("<br/>");
        //
        //     });
        //     $('.loader1').fadeOut();
        //
        //
        //     $("circle").each(function () {
        //         if($(this).attr('data-status')==="1") {
        //             $(this).addClass("enabled heyo top");
        //             jQuery(".top").tipso({
        //                 titleContent: "",
        //                 position: "top",
        //                 color: "black",
        //                 background: "#eee",
        //                 width: "100",
        //                 speed: 100
        //             });
        //         }
        //         else $(this).addClass("disabled");
        //     });
        //     $("circle").click(function () {
        //         var priceOfAll = 0;
        //
        //         if(!($(this).hasClass('disabled'))) {
        //             $(this).toggleClass("bought");
        //
        //             var clicked = $(this).attr("data-status");
        //
        //             if(clicked === "1") {
        //                 $(this).attr("data-status", "0");
        //                 //console.log("if work");
        //             }
        //             else {
        //                 $(this).attr("data-status", "1");
        //                 //console.log("else work")
        //             }
        //
        //         }
        //         $("circle").each(function () {
        //             if($(this).hasClass("bought")){
        //                 priceOfAll += parseInt($(this).attr("data-price"));
        //             }
        //         })
        //
        //         $(".count").text(priceOfAll);
        //
        //     });
        //
        // }).error(function () {
        //     $("#hall-scheme").empty().css("text-align", "center").append("<h5 style='width: 100%'>Sorry hall is not found</h5>")
        // });

    });


    $("#buy").click(function (e) {

        e.preventDefault();


        var tickets = $("circle").map(function () {
            if($(this).hasClass("bought")) {
                return {name: `Tickets[${$(this).attr("data-id")}]`, value: $(this).attr("data-id")}
            }
        });
        tickets._token = {
            "name": "_token",
            "value" : $('meta[name="csrf-token"]').attr('content')
        };
        $.ajax({
            type: "POST",
            data: tickets,
            url: "http://192.168.0.152/cart/add",
            dataType: "json",
            //encode: true,
            success: function(data) {
                console.log(data);
                if(data.status == -1){
                    $(".modal.open").modal('close');
                    $("body").scrollTo(0);
                    $("#modal1").modal('open');

                }
                else {
                    console.log("ura");
                }
            }
        })
    });





    // $(".data").hover(
    //     function() {
    //         $(".tooltipForPrice").addClass("active")
    //             .html($(this).attr("data-tooltip"));
    //     },
    //     function() {
    //         $(".tooltipForPrice").removeClass("active");
    //     }
    // );
    //
    // $(".table-in").on("mousemove", function(e) {
    //     $(".tooltipForPrice").css({
    //         left: e.pageX,
    //         top: e.pageY -70
    //     });
    // });

});

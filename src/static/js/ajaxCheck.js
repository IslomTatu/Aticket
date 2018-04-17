$(document).ready(function () {
    //
    // $.getJSON("https://jsonplaceholder.typicode.com/users", function (data) {
    //     var obj = Jquery.parseJSON(data);
    //         alert(obj[0].id)
    //
    // });


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


    // $("#uname").change(function () {
    //         var uname = $("#uname").val();
    //         var reg = $.ajax({
    //             url: 'https://jsonplaceholder.typicode.com/users',
    //             type: "GET",
    //             dataType: "json",
    //             data: {username: uname},
    //             success: function () {
    //                     $("#uname").addClass("invalid");
    //                     $("#forUserName").attr("data-error", "this username already exist").addClass("active");
    //             }
    //         });
    //
    // })




});
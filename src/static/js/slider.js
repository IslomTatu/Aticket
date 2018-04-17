$(document).one('ready', function(){

    var backgrounds = [
        "#3e6f3e",
        "#4d4d4d",
        "#862636",
        "#494b4d",
        "#9c3f30",
        "#8f3251",
        "#3b3835",
        "#245770",
        "#657a25",
        "#384e78",
        "#75446d"
    ];





        $(".data-item").each(function(){
            $(this).css("background-color", backgrounds[Math.floor(Math.random()*backgrounds.length)]);
            console.log(backgrounds[Math.floor(Math.random()*backgrounds.length)]);

        })





});
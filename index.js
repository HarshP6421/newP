var audio1 = new Audio("images/heartbeat.mp3");
var audio2= new Audio("images/main.mp3");

function object(statement, time) {
    setTimeout(function (statement, time) {
        statement;
    }, time)
}

$(".image").click(function () {
    $("h1").css("font-size","200%")
    $("h1").html("<p>This is for you</p><p>❤️👇❤️</p>");
    $(".image").css("width","100%");
    $(".image").hide();
    $(".image").attr("src","images/heart.gif");
    $(".image").show();
    audio1.play();
        setTimeout(function(){
            $("h1").html("3");
        },4000)

        setTimeout(function(){
            $("h1").html("2");
        },5000)

        setTimeout(function(){
            $("h1").html("1");
        },6000)

        setTimeout(function(){
        $("h1").html("<p>Love you Buddy❤️</p>");
        $(".image").hide();
        $(".image").attr("src","images/image_main.jpg");
        $(".image").css("width","100%");
        $(".image").show();
        audio2.play();
        },7000)

        
})





$(document).ready(function () {

    var timer = 60;
    var intervalId;

    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unAnswered = 15;

    //To start game
    $("#triviaGame").hide();
    $("#endGameResults").hide();

    $("#start").on("click", function () {
        $("#beginGame").hide();
        $("#triviaGame").show();
        startTimer();
    });

    function startTimer() {
        intervalId = setInterval(decrement, 1000);
        function decrement() {
            timer--;
            $("#timer").html(timer + " seconds left!");
        }
    }
});
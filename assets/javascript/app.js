$(document).ready(function () {

    //One issue is that the score doesn't populate correctly.  Console.log will properly show the score.
    //Second issue, could not reset timer correctly.

    var correctAnswer = 0;
    var incorrectAnswer = 0;
    $("#q1").hide();
    $("#q2").hide();
    $("#q3").hide();
    $("#results").hide();

    $("#start").on("click", gameTimer.start);

    $("#start").click(function () {
        $("#startIt").hide();
        $("#q1").append($("#q1").show());
    });

    $(".ans1").click(function () {
        $("#q1").hide();
        $("#q2").append($("#q2").show());
    })

    $(".ans2").click(function () {
        $("#q2").hide();
        $("#q3").append($("#q3").show());
    })

    $(".ans3").click(function () {
        $("#q3").hide();
        $("#results").append($("#results").show());
        $("#correct").text("Correct Answers: " + correctAnswer);
        $("#incorrect").text("Incorrect Answers: " + incorrectAnswer);

    })

    $("p").on("click", function () {
        if ((event.target.id === "b1") || (event.target.id === "d2") || (event.target.id === "a3")) {
            correctAnswer++;
            console.log(correctAnswer);
        } else {
            incorrectAnswer++;
            console.log(incorrectAnswer);
        }
    }
    );

    $("#replay").on("click", function () {
        $("#results").hide();
        correctAnswer = 0;
        incorrectAnswer = 0;
        $("#startIt").append($("#startIt").show());
    });

});
var intervalId;
// var time = 30;
// function start() {
//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
// }
// function decrement() {
//     time--;
//     $("#timer").html("<h2>" + time + "<h2>");
//     if (time === 0) {
//         stop();
//         console.log("Time Up!");
//     }
// }
// function stop() {
//     clearInterval(intervalId);
// };
var clockRunning = false;
var gameTimer = {
    time: 90,
    start: function () {
        if (!clockRunning) {
            clockRunning = true;
            intervalId = setInterval(gameTimer.decrement, 1000);
        }
    },
    decrement: function () {
        gameTimer.time--;
        $("#timer").html("<h2>" + gameTimer.time + "<h2>");
        if (gameTimer.time === 0) {
            stop();
            console.log("Time Up!");
        }
    },
    stop: function () {
        clearInterval(intervalId);
        clockRunning = false;
    },
    reset: function () {
        gameTimer.time = 90;
    }
}
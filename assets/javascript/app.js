$(document).ready(function () {

 
    // var qTRQ = ["Forevermore", "Nevermore", "Never ever", "Forever and a Day"];
    // var kBQ = ["81 points", "99 points", "62 points", "76 points"];
    // var disneyQ = ["Darwing Duck", "Mike Meyers", "Spongebob Squarepants", "Jack Skellington"];
    // var musicalQ = ["Chicago", "Moulin Rouge", "Final Fantasy", "Todd Sweeney"];
    // var pokerQ = ["Flush", "Blackjack", "Two Pair", "Three of a Kind"];


    // var questions = [qTRQ, kBQ, disneyQ, musicalQ, pokerQ];
    // var intervalId;
    // var timer = {};
    // var clickedAnswer;
    // var correctAnswer = qTRQ[1];


//hideStart =  $("#jumbostart").hide();

var correctAnswer= 0;
var incorrectAnswer =0;

    $("#start").on("click", start);


    $("p").on("click", function () {
            if ((event.target.id === "b1") || (event.target.id === "d2") || (event.target.id === "a3")) {
                correctAnswer++;
                console.log(correctAnswer);
            }else {
                incorrectAnswer++;
                console.log(incorrectAnswer);
            }
        }
    );

});
var intervalId;
var time = 30;
function start() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
}
function decrement() {
    time--;
    $("#timer").html("<h2>" + time + "<h2>");
    if (time === 0) {
        stop();
        console.log("Time Up!");
    }
}
function stop() {
    clearInterval(intervalId);
};




var blueAudio = new Audio("sounds/blue.mp3")
var greenAudio = new Audio("sounds/green.mp3")
var redAudio = new Audio("sounds/red.mp3")
var yellowAudio = new Audio("sounds/yellow.mp3")
var wrong = new Audio("sounds/wrong.mp3");


var userClickedPattern = [];
var gamePattern = [];
var buttonColors = ["red", "blue", "green", "yellow"];
var started = false;
var canClick = true;
var level = 0;

$(document).on("keydown", function () {
    if(!started) {
        started = true;
        $("h1").text("Level " + level);
    
        nextSequence();
    }
});

$(".btn").on("click", function () {
    if (started && canClick) {
        var chosenColor = this.id;
        userClickedPattern.push(chosenColor);
        playSound(chosenColor);
        animatePress(chosenColor);

        var correct = arraysEqual(gamePattern, userClickedPattern);

        if (!correct) {
            $("h1").text("Game Over. Press any key to restart.");
            canClick = false;
            wrong.play();
            startOver();
        } else if (gamePattern.length === userClickedPattern.length) {
            canClick = false;
            setTimeout(function() {
                nextSequence();
                userClickedPattern = [];
                canClick = true;
            }, 1000)    
        }    
    }
})

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColor = buttonColors[randomNumber];

    console.log(randomChosenColor);
    
    gamePattern.push(randomChosenColor)
    level++;
    
    $("h1").text("Level " + level);
    playSound(randomChosenColor);
    $("." + randomChosenColor).fadeOut(100).fadeIn(100);

    return randomChosenColor;
}

function playSound(name) {
    switch(name) {
        case "blue":
            blueAudio.play();
            break;
        case "green":
            greenAudio.play();
            break;
        case "red":
            redAudio.play();
            break;
        case "yellow":
            yellowAudio.play();
            break;
    }
}

function animatePress(currentColor) {
    $("." + currentColor).addClass("pressed");
    setTimeout(function () {
        $("." + currentColor).removeClass("pressed");
    }, 100);
}

function arraysEqual(randomInput, userInput) {
    if (randomInput === userInput) return true;
    if (randomInput == null || userInput == null) return false;
  
    // If you don't care about the order of the elements inside
    // the array, you should sort both arrays here.
    // Please note that calling sort on an array will modify that array.
    // you might want to clone your array first.
  
    for (var i = 0; i < userInput.length; ++i) {
      if (userInput[i] !== randomInput[i]) return false;
    }
    return true;
}

function startOver() {
    userClickedPattern = [];
    gamePattern = [];
    started = false;
    canClick = true;
    level = 0;
}
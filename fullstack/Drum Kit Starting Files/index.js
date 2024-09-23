var buttons = document.querySelectorAll(".drum");
var audioTom1 = new Audio("sounds/tom-1.mp3");
var audioTom2 = new Audio("sounds/tom-2.mp3");
var audioTom3 = new Audio("sounds/tom-3.mp3");
var audioTom4 = new Audio("sounds/tom-4.mp3");
var audioCrash = new Audio("sounds/crash.mp3");
var audioKickBass = new Audio("sounds/kick-bass.mp3");
var audioSnare = new Audio("sounds/snare.mp3");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
        var key = this.innerHTML;

        makeSound(key);
    })
} 

addEventListener("keydown", function(event) {
    console.log(event);
    makeSound(event.key)
})

function makeSound(key) {
    switch (key) {
        case "w":
            audioTom1.play();
            break;

        case "a":
            audioTom2.play();
            break;
        
        case "s":
            audioTom3.play();
            break;

        case "d":
            audioTom4.play();
            break;
        
        case "j":
            audioSnare.play();
            break;
        
        case "k":
            audioCrash.play();
            break;

        case "l":
            audioKickBass.play();
            break;
        
        default:
            console.log(key);
    }
    buttonAnimation(key);
}

function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(() => {
        activeButton.classList.remove("pressed")
    }, 100);
}
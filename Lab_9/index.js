let buttons = document.querySelectorAll(".drum");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        let buttonText = this.textContent;
        playSound(buttonText);
    });
}

function playSound(key) {
    let sound;
    switch (key) {
        case "w":
            sound = new Audio("sounds/tom-1.mp3");
            break;
        case "a":
            sound = new Audio("sounds/tom-2.mp3");
            break;
        case "s":
            sound = new Audio("sounds/tom-3.mp3");
            break;
        case "d":
            sound = new Audio("sounds/tom-4.mp3");
            break;
        case "j":
            sound = new Audio("sounds/snare.mp3");
            break;
        case "k":
            sound = new Audio("sounds/crash.mp3");
            break;
        case "l":
            sound = new Audio("sounds/kick-bass.mp3");
            break;
        default:
            console.log("Неизвестная кнопка:", key);
            return;
    }
    sound.play();
}

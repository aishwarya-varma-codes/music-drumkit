//detecting button press
numberOfDrumButtons = document.querySelectorAll(".drum").length;
for(var i=0; i < numberOfDrumButtons; i++)
{
document.querySelectorAll(".drum")[i].addEventListener("click", function()
{
    
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    // switch(buttonInnerHTML)
    // {
    //     case "s":
    //         var tom1 = new Audio("sounds/tom-1.mp3");
    //         tom1.play();
    //         break;
    //     case "r":
    //         var tom2 = new Audio("sounds/tom-2.mp3");
    //         tom2.play();
    //         break;
    //     case "g":
    //         var tom3 = new Audio("sounds/tom-3.mp3");
    //         tom3.play();
    //         break;
    //     case "m":
    //         var tom4 = new Audio("sounds/tom-4.mp3");
    //         tom4.play();
    //         break;
    //     case "p":
    //         var snare = new Audio("sounds/snare.mp3");
    //         snare.play();
    //         break;
    //     default: console.log(buttonInnerHTML);
    // }
});
}

//instead of alert [alert("I got clicked");] we want sound, so open chrome and search for play sound javascript
//it is done by creating an object ....var audio=new Audio('audio_file.mp3');
//                                      audio.play();
//instead of click we can use keypress


//detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
});

function makeSound(key)
{
    switch(key)
    {
        case "s":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "r":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "g":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "m":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "p":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        default: console.log(buttonInnerHTML);
    }
}
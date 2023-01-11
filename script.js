const keyOfPiano = document.querySelectorAll(".pianoKays");
const volumeSlider = document.querySelector(".volume input");


let audio = new Audio (`./sounds/notificationa.wav`) ; //src of tune by default tune of a
// audio.pause();
audio.volume=0;

function playTune (key) {
    audio.src = `./sounds/notification${key.getAttribute('data-Key')}.wav`; // passing audio src based on key pressed
    audio.play(); ///playing audio
 }

function handelValue  (e) 
{
    console.log(e)
    console.log(e.target.value);//step in range from volume slider
    audio.volume = e.target.value; //passing the range value as an audio volume;
}

volumeSlider.addEventListener("input",handelValue);

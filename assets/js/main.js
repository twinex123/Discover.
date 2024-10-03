console.log("JS initializated")

var sound_button = document.querySelector(".toolbar");
var sound_icon = document.querySelector("#sound_icon");

var video_element = document.getElementById("video-background");



sound_button.addEventListener("click", function(){
    if (video_element.muted) {
        video_element.muted = false;  
        sound_icon.className = "fa-solid fa-volume-high"
    } else {
        video_element.muted = true;
        sound_icon.className = "fa-solid fa-volume-xmark"
    }
});
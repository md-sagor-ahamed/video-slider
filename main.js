const item = document.querySelector(".videoItem");
const rightAngle = document.querySelector(".right");
const leftAngle = document.querySelector(".left");
const container = document.querySelector(".containerWrapper");
let count = 0;
const videos = ["videos/1.mp4", "videos/2.mp4", "videos/3.mp4", "videos/4.mp4"];



item.src = videos[count]

rightAngle.addEventListener("click", ()=>{
    count++;
    if(count > videos.length - 1){
        count = 0;
    }
    item.src = videos[count]
});

leftAngle.addEventListener("click", ()=>{
    count--;
    if(count < 0){
        count = 3;
    }
    item.src = videos[count]
});

function playSlider(){
    if(count === videos.length -1){
        count = 0;
        item.src = videos[count];
    }else{
        count++
        item.src = videos[count];
    }
}

setInterval(playSlider, 4000)
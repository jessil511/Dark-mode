(function(){



document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)"

let media = document.querySelector.querySelectorAll("img, pictures, video");

media.forEach((mediaItem)=>{
    mediaItem.style.filter = "invert(1) hue-rotate(180deg)";
})
})();
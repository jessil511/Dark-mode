(function(){



    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)"
    
    let media = document.querySelector.querySelectorAll("img, pictures, video");
    
    media.forEach((mediaItem)=>{
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)";
    })
    })();
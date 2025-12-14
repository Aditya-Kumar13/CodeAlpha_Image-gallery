const pictureContainer = document.querySelector(".pictures");
const bigscreen =document.querySelector(".bigscreen")
const mainscreen = document.querySelector("#mainimg")

function closebig(){
    bigscreen.style.display="none";
}

function fullscreen(pic){
    mainscreen.src=pic;
    bigscreen.style.display="flex";
}


let imageURLs = [];

let currentIndex = 0;

function collectImageURLs() {
    const images = pictureContainer.querySelectorAll("img");
    images.forEach(img => {
        imageURLs.push(img.src);
    });
}

collectImageURLs();
function nextImage() {
    
    currentIndex++;
    
    if (currentIndex >= imageURLs.length) {
        currentIndex = 0;
    }
    
    mainscreen.src = imageURLs[currentIndex];
}


function prevImage() {
    currentIndex--;
    
    if (currentIndex < 0) {
        currentIndex = imageURLs.length - 1;
    }
    mainscreen.src = imageURLs[currentIndex];
}


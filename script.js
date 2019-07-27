let listingImage = document.getElementById("listing-image");

let nextListing = function() {
    let imgNum = Math.floor(Math.random() * 2);
    listingImage.style.background = `url("./clothes${imgNum}.jpg")`;
}

listingImage.addEventListener("click", event => {
    let x = event.pageX - listingImage.offsetLeft; 
    let y = event.pageY - listingImage.offsetTop; 

    if (x <= 50) {
        nextListing();
    } else if (x >= 400 && x <= 460) {
        console.log("right");
    }
});
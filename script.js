let listingImage = document.getElementById("listing-image");

listingImage.addEventListener("click", event => {
    let imgNum = Math.floor(Math.random() * 2);
    listingImage.style.background = `url("./clothes${imgNum}.jpg")`;
    console.log("test");
});


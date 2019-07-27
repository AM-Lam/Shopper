let listingImage = document.getElementById("listing-image");

let nextListing = function() {
    let randomListing = listings[Math.floor(Math.random() * 2)]
    changeListingImage(randomListing);
    changeUserDetails(randomListing);
}

let changeListingImage = function(listing) {
    let imgNum = listing.listingNo;
    listingImage.style.background = `url("./clothes${imgNum}.jpg")`;
}

let changeUserDetails = function(listing) {
    let profilePic = document.getElementsByClassName("userprofile")[0];
    let username = document.getElementById("username");
    profilePic.style.backgroundColor = listing.userColor;
    username.innerText = listing.userName;
}

listingImage.addEventListener("click", event => {
    let x = event.pageX - listingImage.offsetLeft; 
    let y = event.pageY - listingImage.offsetTop; 

    if (x <= 75) {
        nextListing();
    } else if (x >= 375 && x <= 460) {
        console.log("right");
    }
});

let listing0 = {
    listingNo: 0,
    userColor: "blue",
    userName: "Joe Smith"
}

let listing1 = {
    listingNo: 1,
    userColor: "red",
    userName: "John Smith"
}

let listings = [listing0, listing1];
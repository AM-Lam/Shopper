let listingImage = document.getElementById("listing-image");

let nextListing = function() {
    let listings = [];
    getListings().then(result => {
        for (let i = 0; i < result.length; i++) {
            listings.push(result[i]);
        }
    });
    console.log(listings);
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
    nextListing();
});

/*let listing0 = {
    listingNo: 0,
    userColor: "blue",
    userName: "Joe Smith"
}

let listing1 = {
    listingNo: 1,
    userColor: "red",
    userName: "John Smith"
}

let listings = [listing0, listing1];*/
let listingImage = document.getElementById("listing-image");

let loadListings = function() {
    let listings = [];
    getListings().then(result => {
        for (let i = 0; i < result.length; i++) {
            listings.push(result[i]);
        }
    });
    return listings;
}

let nextListing = function(loadedListings) {
    let randomListing = loadedListings[Math.floor(Math.random() * (loadedListings.length - 1))];
    console.log(randomListing.get("itemImage"));
    console.log("................");
    let url = randomListing.get("itemImage")._url;
    changeListingImage(url);
}

let changeListingImage = function(url) {
    listingImage.style.background = `url(${url})`;
}

let changeUserDetails = function(listing) {
    let profilePic = document.getElementsByClassName("userprofile")[0];
    let username = document.getElementById("username");
    profilePic.style.backgroundColor = listing.userColor;
    username.innerText = listing.userName;
}

let loadedListings = loadListings();
listingImage.addEventListener("click", event => {
    nextListing(loadedListings);
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
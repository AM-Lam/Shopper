let listingImage = document.getElementById("listing-image");

let loadListings = function() {
    let listings = [];
    getListings().then(result => {
        for (let listing of result) {
            listings.push(listing);
        }
    });
    return listings;
}

let getRandomListing = function(loadedListings) {
    return loadedListings[Math.floor(Math.random() * loadedListings.length)];
}

let changeListingImage = function(listing) {
    let url = listing.get("itemImage")._url;
    listingImage.style.background = `url(${url})`;
}

let changeListingPrice = function(listing) {
    let price = listing.get("minPrice");
    document.getElementById("minPrice").innerText = "Min price: " + price + ".00";
}

let changeUserDetails = function(name) {
    //let profilePic = document.getElementsByClassName("userprofile")[0];
    let username = document.getElementById("username");
    //profilePic.style.backgroundColor = listing.userColor;
    username.innerText = name;
}

let loadedListings = loadListings();

listingImage.addEventListener("click", event => {
    let randomListing = getRandomListing(loadedListings);
    changeListingImage(randomListing);
    let user = randomListing.get("seller");
    let name;
    user.fetch().then(fetchedUser => {
        name = fetchedUser.getUsername();
        changeUserDetails(name);
        changeListingPrice(randomListing);
        console.log(name);
    })
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
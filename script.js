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
    listingImage.style.background = `url(${url}) center`;
}

let changeProfilePic = function(user) {
    let url = user.get("profileImage")._url;
    profilePic.style.background = `url(${url}) no-repeat center`;
}

let changeListingPrice = function(listing) {
    let price = listing.get("minPrice");
    document.getElementById("minPrice").innerText = "Min price: $" + price + ".00";
}

let changeUserDetails = function(name) {
    //let profilePic = document.getElementsByClassName("userprofile")[0];
    let username = document.getElementById("username");
    //profilePic.style.backgroundColor = listing.userColor;
    username.innerText = name;
}

let changeDescriptionText = function(listing) {
    descriptionText.innerText = listing.get("itemDesc");
}


let listingImage = document.getElementById("listing-image");
let nextButton = document.getElementById("rightButton");
let shopitButton = document.getElementById("leftButton");
let profilePic = document.getElementById("profilePic");
let descriptionText = document.getElementById("descriptionText");
let loadedListings = loadListings();

let nextListing = function()  {
    let randomListing = getRandomListing(loadedListings);
    changeListingImage(randomListing);
    let user = randomListing.get("seller");
    let name;
    user.fetch().then(fetchedUser => {
        name = fetchedUser.getUsername();
        changeUserDetails(name);
        changeListingPrice(randomListing);
        changeProfilePic(fetchedUser);
        changeDescriptionText(randomListing);
        console.log(name);
    });
}

nextButton.addEventListener("click", nextListing);
console.log(loadedListings);

shopitButton.addEventListener("click", () =>{
    window.prompt("Please enter bid: ");
    window.alert("Your bid has been recorded");
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
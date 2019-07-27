Parse.initialize(
    "RWE2RKDjdL2b78zLTenYvOCcVoYSQdgGnV6lgUUM",
    "E0sawPFE9XbrzYqq3qG5OJYxH6NVSd3QUcMqgMLo"
);
Parse.serverURL = 'https://pg-app-imcjb683ytotbq6ijepkeg0yqzr9bq.scalabl.cloud/1/';

// var user = new Parse.User();
// // user.save({
// //     username: "Asdf",
// //     password: "yeet"
// // }).then(function(response) {
// //     console.log('New object create with success! ObjectId: ' + response.id + ', '+ user.get('username')+ ', '+user.id);
// // }).catch(function(error) {
// //     alert('Error: ' + error.message);
// // });

// var buyer = new Parse.Object("Buyers");
// buyer.save().then((response) => {
//     // Execute any logic that should take place after the object is saved.
//     alert('New object created with objectId: ' + response.id);
// }, (error) => {
//     // Execute any logic that should take place if the save fails.
//     // error is a Parse.Error with an error code and message.
//     alert('Failed to create new object, with error code: ' + error.message);
// });


// const Sellers = Parse.Object.extend("Sellers");
// var query = new Parse.Query(Sellers);
// query.get("dDYPlc1YC7").then((seller) => {
//     addListing("a", "ds", "sd", seller, 3, 4);
// });
getListings();

async function getListings() {
    const Listings = Parse.Object.extend("Listings");
    var query= new Parse.Query(Listings);
    const results = await query.find();
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    // for (let i = 0; i < results.length; i++) {
    //     var object = results[i];
    //     alert(object.id + ' - ' + object.get('itemDesc'));
    // }
    return results;
}

async function getSellerBargains(seller) {
    const Listings = Parse.Object.extend("Listings");
    var query = new Parse.Query(Listings);
    query.equalTo("seller", seller);
    const results = await query.find();
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    // for (let i = 0; i < results.length; i++) {
    //     var object = results[i];
    //     alert(object.id + ' - ' + object.get('itemDesc'));
    // }
    return results;
}

async function getBuyerBargains(buyer) {
    const Bargains = Parse.Object.extend("Bargains");
    var query = new Parse.Query(Bargains);
    query.equalTo("buyer", buyer);
    const results = await query.find();
    alert("Successfully retrieved " + results.length + " scores.");
    // Do something with the returned Parse.Object values
    // for (let i = 0; i < results.length; i++) {
    //     var object = results[i];
    //     alert(object.id + ' - ' + object.get('itemDesc'));
    // }
    return results;
}

function addListing(name, description, image, seller, minPrice, maxPrice) {
    var listing = new Parse.Object("Listings");
    listing.save({
        itemName: name,
        itemDesc: description,
        itemImage:image,
        seller: seller,
        minPrice: minPrice,
        maxPrice: maxPrice
    }).then((response) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + response.id);
    }, (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message);
    });
}

function getImageURLFromObject(imageObject) {
    return imageObject.url;
}

function getImageObjectFromFile(name,file) {
    return new Parse.File(name, file);
}

function getUserObject(objectId) {
    var User = new Parse.Object("User");
    var query = new Parse.Query(User);
    var result;
    query.get(objectId).then((user) => {
        result = user;
    }, (error) => {
        alert('Failed to create new object, with error code: ' + error.message);
    });
    return result;
}

function getSellerObject(userObject) {
    return userObject.get("sellerNumber");
}
let sellerID = "7EAz8rTwqK";
var User = new Parse.Object.extend("User");
let seller = new User();
seller.id = sellerID;

let loadDeals = function() {
    let deals = [];
    getSellerBargains(seller).then(result => {
        console.log(result);
        for (let listing of result) {
            deals.push(listing);
        }
        appendPosts(deals);
        return deals;
    });

};
loadDeals();
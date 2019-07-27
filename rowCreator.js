function appendPosts(deals) {
    let names = ["John Smith","Laxman Kennet","Nurul Aldous","Rakesh Sanjay","Gilad Marijeta","Peter Parker"];
    console.log(deals.length);

    frag = document.createDocumentFragment();


    var node = document.getElementById("listcolumn");

    for (var a = 0; a < deals.length; ++a) {

        var newNode = node.cloneNode(true);
        var childs = newNode.childNodes;
        console.log(childs);
        childs[1].childNodes[1].innerHTML = "<b>Buyer Name:</b> " + names[a];
        childs[1].childNodes[3].innerHTML = "<b>Location:</b> Sydney";
        childs[1].childNodes[5].innerHTML = "<b>Time:</b> 29 July, 9AM";
        childs[3].childNodes[1].innerHTML = "<b>Price:</b> $" + deals[a].get("price");
        frag.appendChild(newNode);
    }
    document.getElementById('main_content').removeChild(node);
    document.getElementById('main_content').appendChild(frag);
}


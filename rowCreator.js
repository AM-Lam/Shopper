function appendPosts(){
    frag=document.createDocumentFragment();
    var node = document.getElementById("listcolumn");
    for(var a=0;a<=8;++a){
     var newNode=node.cloneNode(true);
     var childs=newNode.childNodes;

     frag.appendChild(newNode);
    }
    document.getElementById('main_content').appendChild(frag);
   }

 appendPosts();
 

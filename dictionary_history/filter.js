var searchbar=document.getElementsByTagName("header")[0];
var results=document.getElementsByClassName("res_cell_center")[0];
document.body.innerHTML="";
document.body.appendChild(searchbar);
document.body.appendChild(results);


searchbar.style.position="relative";
document.getElementsByName("q")[0].focus();
setCookie();

function setCookie() {
    var word = document.querySelector("span.orth");
    if(word == null){
        return;
    }
    var word = word.innerHTML;
    var cname = "words";
    var name = cname + "=";
    var cvalue = "";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            cvalue = c.substring(name.length, c.length);
        }
    }
    if (cvalue.split(",").length<30){
        cvalue = word + "," + cvalue;
    }else{
        var words = cvalue.split(",");
        words.splice(29,1);
        words.splice(0,0,word);
        cvalue = words.join(",");
    }
    document.cookie = cname + "=" + cvalue + ";path=/";
}

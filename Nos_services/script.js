var slidermain = document.getElementById("slider");
var item = slidermain.getElementsByClassName("item");
function suivant(){
    slidermain.append(item[0]);
    
}
function arriere(){
    slidermain.prepend(item[item.length - 1]);
}
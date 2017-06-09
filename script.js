
function changeText(){

var userInputcolor = Array.prototype.slice.call(document.querySelectorAll(".move:checked")).map(function(el) {
        return el.value;
    }).join(', ')
    
document.getElementById('output2').innerHTML = userInputcolor;
return false;
}


function random() {
 var generateNumber =
 Array.prototype.slice.call(document.querySelectorAll(".move:checked")).map(function(el) {
     Math.floor(Math.random()*1001);
     document.getElementById('output2').innerHTML = generateNumber;
     return false;
 
}
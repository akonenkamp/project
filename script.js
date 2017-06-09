
function changeText(){

var userInputcolor = Array.prototype.slice.call(document.querySelectorAll(".move:checked")).map(function(el) {
        return el.value;
    }).join(', ')
    
document.getElementById('output2').innerHTML = userInputcolor;
return false;
}
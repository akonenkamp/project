
function changeText(){
  var userInputcolor = Array.prototype.slice.call(
    document.querySelectorAll(".move:checked")).map(function(el) {
          return el.value;
    }).join(', ')

  document.getElementById('output2').innerHTML = random() + " " + userInputcolor;
  return false;
}


function random () {
 return Math.floor(Math.random()*100);
}
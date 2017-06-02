//var exercise = [
//  { 
//    "name": "burpee"
//   },
//  {
//    "name": "squat"
//  },
//  {
//    "name": "pushup"
//  },
//  {
//    "name": "run"
//  }
//];
//
//
//function changeText(){
//var userInputname = document.getElementById('name').value;
//var userInputcolor = Array.prototype.slice.call(document.querySelectorAll(".move:checked")).map(function(el) {
//        return el.value;
//    }).join(', ')
//    
//document.getElementById('output1').innerHTML = userInputname;
//document.getElementById('output2').innerHTML = userInputcolor;
//return false;
//  
//}

function changeText(){

var userInputcolor = Array.prototype.slice.call(document.querySelectorAll(".move:checked")).map(function(el) {
        return el.value;
    }).join(', ')
    
document.getElementById('output2').innerHTML = userInputcolor;
return false;
}
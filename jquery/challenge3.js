$(document).ready(function(){
  $("form").submit(function(onsubmit){
    var fruit = $('input[name="fruit"]');
    var year = $('input[name="standing"]');
    if((fruit.is(":checked")) && (year.is(":checked"))){
      return true;
    }
    alert("Pick a fruit and a year!");
    return false;
  })
})

// javascript:
// ch3form.onsubmit = function(){
//   var fruit = document.querySelectorAll('input[name="fruit"]');
//   for (let i=0; i< fruit.length; i++){
//     if (fruit[i].checked)
//       return true;
//   }
//   alert("You must pick a fruit!");
//
//   // always return false unless something is checked
//   return false;
//
// }

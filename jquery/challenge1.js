// think about what jquery has that lets us do what js is doing but shorter
$(document).ready(function(){
  $('#subscribe').click(function(){
    $('#emailField').toggle();
  })
})


// if ($('#subscribe').is(':checked')){
//   $('#emailField').toggle();
// javascript:
// subscribe.onchange = function() {
//   // console.log("I have been clicked!");
//   var x = document.querySelector("#emailField");
//   if (this.checked){
//     console.log("selected");
//     x.style.display = "block";
//   } else {
//     console.log("Not Selected");
//     x.style.display = "none";
//   }
// }

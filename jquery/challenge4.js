$(document).ready(function(){
  $("form").submit(function(event){
    var validInput = true;
    var name = $("#fullname").val();
    var address = $("#streetaddr").val();
    // event.preventDefault();
    console.log(name);
    if (name == 0){
      $("#nameerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    } else {
      $("#nameerrormsg").css("display", "none");
    }
    if (address == 0){
      $("#addrerrormsg").css("display", "block");
      event.preventDefault();
      validInput = false;
    } else {
      $("#addrerrormsg").css("display", "none");
    }

  return validInput;

  })
})

// javascript:
// ch4form.onsubmit = function(){
//   return false;
//
//   var validInput = true;
//   var name = document.querySelector("#fullName");
//   var address = document.querySelector("#streetaddr");
//   console.log(name);
//   console.log(address);
//
//   if (name.value.length == 0){
//     document.querySelector("#nameerrormsg").style.display = "block";
//     validInput = false;
//   }
//   else{
//     document.querySelector("nameerrormsg").style.display =
//   }
// }

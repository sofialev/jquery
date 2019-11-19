$(document).ready(function(){
  $("#useBilling").click(function(){
    if ($(this).is(":checked")){
      $("#home").prop('disabled', true);
      $('#home').val($('#billing').val());
    }
    else {
      $('#home').val(" ");
      $("#home").prop('disabled', false);
    }
  })
  })

// $(document).ready(function(){
//   if ($('#useBilling').is(':checked')){
//     $('#home').val($('#billing').val());
//     $("#home").prop('disabled', true);
//   }
//
// })
//
// if($("#isAgeSelected").is(':checked'))
//     $("#txtAge").show();  // checked
// else
//     $("#txtAge").hide();
//
// if(document.getElementById('isAgeSelected').checked)

// JavaScript:
// useBilling.onchange = function() {
//   // console.log("I have been clicked!");
//   var home = document.querySelector('#home');
//   var billing = document.querySelector('#billing');
//
//   if (this.checked){
//     home.value = billing.value;
//     home.disabled = true;
//   } else {
//     home.value = ""
//   }
// }

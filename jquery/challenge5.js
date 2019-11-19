console.log("here");

var imgs = $("img");
var msg = "Hover over an image below."

imgs.each(function (){
  imgs.mouseover(function(){
    // console.log("Hi");
    $('#image').css("backgroundImage", 'url(' +this.src+')');
    $('#image').html(this.alt);
  })

  imgs.mouseout(function(){
    // console.log("bye");
    $('#image').css("backgroundImage", 'url()');
    $('#image').html(msg);
  })

  imgs.focus(function(){
    $('#image').css("backgroundImage", 'url(' +this.src+')');
    $('#image').html(this.alt);
  })

  imgs.blur(function(){
    $('#image').css("backgroundImage", 'url()');
    $('#image').html(msg);
  })
})


// javascript:
// console.log("here")
// var imgs = document.querySelectorAll("img");
// var msg = "Hover over an image below."
// for (let i = 0; i < imgs.length;i++){
// 	imgs[i].onmouseover = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onfocus = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('"+imgs[i].src+"')";
// 	 	document.querySelector('#image').innerHTML= imgs[i].alt;
// 	 }
//
// 	 imgs[i].onmouseleave = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
//
// 	 imgs[i].onblur = function() {
// 	 	document.querySelector('#image').style.backgroundImage="url('')";
// 	 	document.querySelector('#image').innerHTML= msg;
// 	 }
// }

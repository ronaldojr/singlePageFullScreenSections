$("nav").find('a').click(function(e){
	e.stopImmediatePropagation();
  e.stopPropagation();
  e.preventDefault();
	var section = $(this).attr('href');
  $('section.active').toggleClass('active');
  $(section).toggleClass("active");
	$('html, body').animate({
		scrollTop: $(section).stop().offset().top
	});
});


$(document).keydown(function(e){

  console.log(e.keyCode)

  var $ativa = $('section.active');
  var $proximo = $($ativa).next();
  var $anterior = $($ativa).prev();

  if (e.which == 39 || e.which == 40) {
    if ($($ativa).is(':last-child') == false) {
      $ativa.removeClass("active");
      $('html, body').stop().animate({
        scrollTop: $proximo.offset().top
      });
      $proximo.addClass("active");
    } 
  } else if (e.keyCode == 37 || e.keyCode == 38) {
    if ($($ativa).is(':first-child') == false){
      $ativa.removeClass("active");
      $('html, body').stop().animate({
        scrollTop:$anterior.offset().top
      });
      $anterior.addClass("active");
    }
  }



})



$(function(){




  $('section').css({'height':(($(window).height()))+'px'});
  // Now bind the event to the desired element

  $('section').bind("mousewheel DOMMouseScroll  MozMousePixelScroll", function(e) {

    var $this = $(this);
  	var $proximo = $(this).next();
  	var $anterior = $(this).prev();


    e.stopImmediatePropagation();
    e.stopPropagation();
    e.preventDefault();

    var delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.deltaY)

    if(delta < 0) {
        if ($(this).is(':last-child') == false) {
          $this.removeClass("active");
          $('html, body').stop().animate({
            scrollTop: $proximo.offset().top
          });
          $proximo.addClass("active");
        } 
    } else {
      	if ($(this).is(':first-child') == false){
          $this.removeClass("active");
        	$('html, body').stop().animate({
            scrollTop:$anterior.offset().top
          });
          $anterior.addClass("active");
      	}
    }

  })


  /*

https://stackoverflow.com/questions/14613498/how-to-prevent-this-strange-jquery-animate-lag

Make sure to clear the queue when starting a new animation with stop():

$("#newResForm").stop().animate({ opacity: 0 }, 100,function() {
        $("#newResFormWrap").toggle('fast', function (){
            $("#addRes").animate({ opacity: 100 }); 
                 // ...

What's causing the lag is the fact that your long 2-second animation 
$("#newResForm").animate({ opacity: 100 },2000) isn't finished yet. 
JQuery puts animations by default into a queue, waiting for one to 
finish before the next begins. You clear the queue with stop(), 
which is especially useful if you have two contradicting animations 
(like an open and close animation, or a mouseover/mouseout animation). 
In fact you might find it a good practice to begin all your animation 
chains with stop() unless you know you want them to queue with prior 
animations that may have occurred elsewhere.

Getting into more advanced topics, you can even name different queues, 
so that for example your hover animations and your expand/collapse 
animations are treated separately for the purposes of stop(). See the 
queue option (when given a string) at http://api.jquery.com/animate/ 
for more details

  */


  $(window).resize(function(){ // On resize
      $('section').css({'height':(($(window).height()))+'px'});
  });

  $("a.active").click();
});



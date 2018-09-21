$(document).ready(function(){
  window.show_playing = false
  if(window.location.hash == '#autoplay'){
    start_show()
  }
})

$(document).keyup(function(e){
  switch(parseInt(e.which)) {
    case 39:
      next_slide();
    break;
    case 37:
      previous_slide();
    break;
    case 27:
      exit_show();
    break;
    case 66:
      toggle_black();
    break;
    case 80:
      start_show();
    break;
    case 70:
      toggleFullScreen()
    break;
    default:
      console.log(e.which)
    break;

  }
})

start_show = function(){
  console.log('starting show...')
  window.show_end_time = new Date();
  window.show_end_time.setMinutes(window.show_end_time.getMinutes() + 1);
  show_intro_slide()
  build_rundown()
  window.show_playing = true;
  next_slide_timed()
}

next_slide_timed = function(delay){
  if( typeof delay === "undefined"){
    var delay = 10000
  }
  console.log('delay is '+delay)
  setTimeout(function(){
    if(window.show_playing == false){
      return;
    }
    console.log('showing next slide')
    next_slide();
    next_slide_timed();
  },delay)
}

pause_show = function(){

  if(window.show_playing == false){
    start_show()
  }else{
    console.log('pausing show...')
    window.show_playing = false;
  }
}



build_rundown = function(){
  window.slides = _.shuffle($('.presentation-slide'))
  window.current_slide_index = 0
  window.isblack = false
  window.show_playing = false
  window.last_slide_index = window.slides.length-1
}

show_slide = function(index){
  if(window.isblack == true){
    return;
  }
  $('.slide').hide()
  $(slides[index]).show()
  window.current_slide_index = index
}

next_slide = function (){
  if(window.current_slide_index==window.last_slide_index){
    return;
  }
  show_slide(window.current_slide_index+1)
}

previous_slide = function (){
  if(window.current_slide_index==0){
    return;
  }
  show_slide(window.current_slide_index-1)
}

exit_show = function (){
  pause_show()
  show_thankyou_slide()
  setTimeout(function(){
    $('.slide').hide()
  },10000)
}

toggle_black = function (){
  if(window.isblack == true){
      $('.slides').removeClass('presentation-black')
  }else{
    $('.slides').addClass('presentation-black')
  }
  window.isblack = !window.isblack
}

show_intro_slide = function(){
  $('.slide').hide()
  $('.intro-slide').show()
}
show_thankyou_slide = function(){
  $('.slide').hide()
  $('.thankyou-slide').show()
}

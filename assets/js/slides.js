$(document).ready(function(){
  build_rundown()
  show_slide(window.current_slide_index)
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
      pause_show();
    break;
    default:
      console.log(e.which)
    break;

  }
})

var start_show = function(){
  console.log('starting show...')
  window.show_playing = true;
  next_slide_timed()
}

var pause_show = function(){

  if(window.show_playing == false){
    start_show()
  }else{
    console.log('pausing show...')
    window.show_playing = false;
  }
}

var next_slide_timed = function(){
  setTimeout(function(){
    if(window.show_playing == false){
      return;
    }
    console.log('showing next slide')
    next_slide();
    next_slide_timed();
  },10000)
}

var build_rundown = function(){
  window.slides = _.shuffle($('.slide'))
  window.current_slide_index = 0
  window.isblack = false
  window.last_slide_index = window.slides.length-1
}

var show_slide = function(index){
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
  window.location.href = window.site_url+window.site_base_url+'/index'
}

toggle_black = function (){
  if(window.isblack == true){
      $('.slides').removeClass('presentation-black')
  }else{
    $('.slides').addClass('presentation-black')
  }
  window.isblack = !window.isblack
}

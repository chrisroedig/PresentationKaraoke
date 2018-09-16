$(document).ready(function(){
  $('.slide').each(function(i , el){
    var $el = $(el)
    var argb = $el.attr('data-background-argb')
    var rgb = '#'+argb.substr(3,7)
    $el.css('background-color', rgb)
  })
  show_random_slide()
})
$(document).keyup(function(){
  show_random_slide()
})
var show_random_slide = function (){
  $('.slide').hide()
  var slides = $('.slide')
  var slide_count = slides.length
  var slide_index = Math.round(Math.random()*(slide_count-1))
  $(slides[slide_index]).show()
}

$(document).ready(function(){
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

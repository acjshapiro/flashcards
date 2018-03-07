$(document).ready(function() {
  $("#flash-card1-show").on('click', function() {
    $('.description1').text('Const is another variable declaration that will be used to replace let. Const is short for constant meaning these values CANNOT change. Const is great because it removes the "magic number" pattern that we often fall into as developers.')
  })
  $("#flash-card1-hide").on('click', function() {
    $('.description1').text('')
  })

  $("#flash-card2-show").on('click', function() {
    $('.description2').text('Variables declared by let have as their scope the block in which they are defined, as well as in any contained sub-blocks. In this way, let works very much like var. The main difference is that the scope of a var variable is the entire enclosing function.')
  })
  $("#flash-card2-hide").on('click', function() {
    $('.description2').text('')
  })

  $("#flash-card3-show").on('click', function() {
    $('.description3').text("An arrow function does not newly define its own this when it's being executed in the global context; instead, the this value of the enclosing execution context is used, equivalent to treating this as closure value.  Thus, in the following code, the this within the function that is passed to setInterval has the same value as this in the enclosing function")
  })
  $("#flash-card3-hide").on('click', function() {
    $('.description3').text('')
  })

  $("#flash-card4-show").on('click', function() {
    $('.description4').text('Rest parameters allow you to accept an infinite number of arguments.  Rest params are indicated by using 3 dots and a name.  They will be read in as an array:')
  })
  $("#flash-card4-hide").on('click', function() {
    $('.description4').text('')
  })

})
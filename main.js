// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  console.log('%c CONTENT LOADED', 'color: red; font-family: "Times New Roman";')

  const likes = Array.from(document.querySelectorAll('.like-glyph'));

  likes.forEach(l => l.addEventListener('click', function(event) {
    
    mimicServerCall().then(function() {toggleLike(event)})
      .catch(displayErrorMessage);
  }))

  function displayErrorMessage(error) {
    const erm = document.querySelector('#modal');
    erm.innerText = error;
    erm.classList.remove("hidden");
    setTimeout(function() {erm.classList.add("hidden")}, 5000);
  }

  function toggleLike(event) {
    
    const heart = event.target;

    if (heart.innerText === EMPTY_HEART) {
      heart.innerText = FULL_HEART;
      heart.classList.add('activated-heart')}
    else {
      heart.innerText = EMPTY_HEART;
      heart.classList.remove('activated-heart')
    }
  }

})


//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

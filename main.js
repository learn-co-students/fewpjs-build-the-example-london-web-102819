// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', function() {
  console.log('%c CONTENT LOADED', 'color: red; font-family: "Times New Roman";')

  const likes = Array.from(document.querySelectorAll('.like-glyph'));

  likes.forEach(l => l.addEventListener('click', function(e) {
    notifyServer();
    displayLike();
  }))

  function notifyServer() {
    let configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: "Woohoo"
    };

    fetch("http://mimicServer.example.com",configurationObject)
      .then(r => r.json())
      .then(console.log);
  }

  function displayLike() {

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

// Defining text characters for the empty and full hearts for you to use later.

const modal = document.querySelector('#modal')
modal.classList.add('hidden')

const modalP = document.querySelector('#modal-message')

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const EMPTY_HEART = '♡'
  const FULL_HEART = '♥'
  let likes = document.querySelectorAll('.like-glyph');
  likes.forEach(like => like.addEventListener('click', (event) => changeColor(event)));

  function changeColor(event) {
    const heart = event.target

    mimicServerCall()
      .then(() => {
        if (heart.classList.contains('activated-heart')) {
          heart.classList.remove('activated-heart')
          heart.textContent = EMPTY_HEART
        } else {
          heart.classList.add('activated-heart')
          heart.textContent = FULL_HEART
        }
      })
      .catch((errorMsg) => {
        modal.classList.remove('hidden')
        modalP.textContent = errorMsg
        window.setTimeout(() => {
          modal.classList.add('hidden')
        }, 5000)
      })
  }

})

// window.setTimeout(window.alert, 2*1000, 'That was really slow!');
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

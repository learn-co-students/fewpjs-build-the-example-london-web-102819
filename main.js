// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// let firstHeart = document.querySelector("article[id='201811189'] footer ul li span")
// let secondHeart = document.querySelector("article[id='201811190'] footer ul li span")
// let thirdHeart = document.querySelector("article[id='201811191'] footer ul li span")
// let fourthHeart = document.querySelector("article[id='201811192'] footer ul li span")
// let fifthHeart = document.querySelector("article[id='201811193'] footer ul li span")

const hearts = document.querySelectorAll(".like-glyph")
document.querySelector('#modal').classList.add('hidden')

for (i=0; i<hearts.length; i++) {
  hearts[i].addEventListener('click', heartClick)
}

function heartClick(e) {
  let heart = e.target
  if (heart.innerText !== EMPTY_HEART) {unlike(heart)}
  else {attemptLike(heart)}
}

function successfulLike(heart) {
  console.log('success!');
  heart.innerText = FULL_HEART
  heart.classList.add('activated-heart')
}

function unsuccessfulLike(heart) {
  console.log('error!');
  document.querySelector('#modal').classList.remove('hidden')
  setTimeout(function() { 
    document.querySelector('#modal').classList.add('hidden')
  }, 5000);
}

function unlike(heart) {
  heart.innerText = EMPTY_HEART
  heart.classList.remove('activated-heart')
}

function attemptLike(heart) {
  let success = mimicServerCall("http://mimicServer.example.com")
  .then(function(success) {
    successfulLike(heart)
  })
  .catch(function(error) {
    unsuccessfulLike(heart)
  });

  return success
}

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

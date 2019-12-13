// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let errorMessage = document.querySelector("#modal");
function updateLikesStatus(event){
  let heart = event.target;
  console.log(heart);
  mimicServerCall()
  .then (response => {
    if (heart.innerText == EMPTY_HEART){
      heart.innerText = FULL_HEART;
      heart.className = "activated-heart";
    }
    else{
      heart.innerText = EMPTY_HEART;
      heart.className = "like-glyph"; 
    };
  })
  .catch (error => {
    errorMessage.className = "";
    errorMessage.querySelector("#modal-message").innerText = error;
    setTimeout(function(){errorMessage.className = "hidden"}, 5000);
  })
}



let hearts = document.querySelectorAll(".like-glyph");
hearts.forEach(like=>{
  like.addEventListener("click", updateLikesStatus, false);
}); 




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

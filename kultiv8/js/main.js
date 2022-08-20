//Card Flip
//Add the event listener for each flip button access
const card_flip = document.querySelectorAll(".btn-flip");
card_flip.forEach(element => {
  element.addEventListener("click",function (e) {
    const card = e.target.parentElement.parentElement.parentElement;
    card.classList.toggle('is-flipped');
  });
});



// //using querySelectorAll to get the carousels from our container.
// var carousels = document.querySelectorAll("#carousels .carousel");
// //using querySelector to get the carousel_nav class from the container
// var dotsNavContainer = document.querySelector(".carousel_nav");
//
// //forEach function to add navigation dot automatically when a new slide is created
// carousels.forEach((currentCarousel, index) => {
//   //document.creareElement creates the HTML element button
//   var dotButton = document.createElement("button");
//   //chaged dotsButton id to index which is the position in the array
//   dotButton.id = index;
//   dotButton.className =
//     index === 0 ? "carousel_indicator current-showing" : "carousel_indicator";
//   //appendChild() method appends a node as the last child of a node (adds button to dotContainer)
//   dotsNavContainer.appendChild(dotButton);
// });
//
// //using querySelectorAll to get the classes carousel_nav and carousel_indicator
// var dotsNav = document.querySelectorAll(".carousel_nav .carousel_indicator");
// //setting a variable to keep track of the current carousel.
// var currentCarousel = 0;
// //creating an interval to show the next carousel every 10 seconds
// var carouselInterval = setInterval(nextCarousel, 5000);
//
// function nextCarousel() {
//   goToCarousel(currentCarousel + 1);
// }
//
// function previousCarousel() {
//   goToCarousel(currentCarousel - 1);
// }
//
// function goToCarousel(n) {
//   //change the current carousels class so it’s not showing
//   carousels[currentCarousel].className = "carousel";
//   dotsNav[currentCarousel].className = "carousel_indicator";
//   // changes current carousel by n, but we use the % operator to cycle back to zero if we’ve reached the end of the slides
//   currentCarousel = (n + carousels.length) % carousels.length;
//   //we have the new currentCarousel , we change that carousel class so that the carousel is showing.
//   carousels[currentCarousel].className = "carousel showing";
//   dotsNav[currentCarousel].className = "carousel_indicator current-showing";
// }
//
// //The playing variable stores whether the carousel is playing.
// var playing = true;
// var pauseButton = document.getElementById("pause");
//
// //pauses the carousel, and makes the “Pause” button say “Play” instead.
// function pauseCarouselShow() {
//   pauseButton.innerHTML = "&#9658;"; // play character
//   playing = false;
//   clearInterval(carouselInterval);
// }
//
// //plays the carousel, and makes the “Play” button say “Pause” instead.
// function playCarouselShow() {
//   pauseButton.innerHTML = "&#10074;&#10074;"; // pause character
//   playing = true;
//   carouselInterval = setInterval(nextCarousel, 10000);
// }
//
// //click handler so that the Pause/Play button will toggle the carousel between pausing and playing.
// const pauseOnClick = () => {
//   if (playing) {
//     pauseCarouselShow();
//   } else {
//     playCarouselShow();
//   }
// };
// pauseButton.onclick = pauseOnClick;
//
// var next = document.getElementById("next");
// var previous = document.getElementById("previous");
//
// const nextOnClick = () => {
//   pauseCarouselShow();
//   nextCarousel();
// };
// next.onclick = nextOnClick;
//
// const previousOnClick = () => {
//   pauseCarouselShow();
//   previousCarousel();
// };
// previous.onclick = previousOnClick;
//
// dotsNav.forEach((currentDot, index) => {
//   currentDot.onclick = () => {
//     pauseCarouselShow();
//     goToCarousel(index);
//   };
// });
//
// //add an addEventListener for keyboard interaction
// window.addEventListener("keydown", e => {
//   //cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
//   e.preventDefault();
//   if (e.key === "ArrowLeft" || e.keyCode === 37) {
//     previous.onclick();
//     return false;
//   } else if (e.key === "ArrowRight" || e.keyCode === 39) {
//     nextOnClick();
//     return false;
//   } else if (e.keyCode === 32) {
//     pauseOnClick();
//     return;
//   }
// });

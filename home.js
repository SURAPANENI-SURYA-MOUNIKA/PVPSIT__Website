var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

// Automatic slideshow
var autoSlideIndex = 0;
carousel();

function carousel() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  autoSlideIndex++;
  if (autoSlideIndex > slides.length) {autoSlideIndex = 1}
  slides[autoSlideIndex-1].style.display = "block";

  // Change image every 2 seconds
  setTimeout(carousel, 2000);
}


function handleIntersection(entries, observer) {
  entries.forEach((entry) => {
      // If the entry (template) is in the viewport, add a class to make it visible
      if (entry.isIntersecting) {
          entry.target.classList.add('visible');
      } else {
          // Remove the class if the entry is not in the viewport
          entry.target.classList.remove('visible');
      }
  });
}

// Create an Intersection Observer
const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

// Target all elements with the class 'template-row' and observe them
document.querySelectorAll('.template-row').forEach((element) => {
  observer.observe(element);
});





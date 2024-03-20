let currentSlide = 0;

function nextSlide() {
  const slides = document.querySelectorAll('.box');
  const totalSlides = slides.length;
  
  currentSlide = (currentSlide + 1) % totalSlides;
  
  updateSliderPosition(slides);
}

function prevSlide() {
  const slides = document.querySelectorAll('.box');
  const totalSlides = slides.length;
  
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  
  updateSliderPosition(slides);
}

function updateSliderPosition(slides) {
  const slider = document.querySelector('.slider');
  const slideWidth = slides[0].offsetWidth;
  
  const displacement = -currentSlide * slideWidth;
  slider.style.transform = `translateX(${displacement}px)`;
}

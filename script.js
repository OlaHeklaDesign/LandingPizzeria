const filters = document.querySelectorAll(".filter");
const dishes = document.querySelectorAll(".dish");
const lines = document.querySelectorAll(".line-menu");


filters.forEach(filter => {
  filter.addEventListener("click", function() {
    const category = this.dataset.category;

    dishes.forEach(dish => {
      dish.style.display = "none";

      if(dish.classList.contains(category)) {
        dish.style.display = 'flex';
        lines.forEach(line => {
          if(line.classList.contains(category)){
            line.classList.add("active");
          } else {
            line.classList.remove("active");
          }
        });
      } 
    });
    });
  });


const slides = document.querySelector(".slides");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");

let counter = 0;
const slideWidth = 332;

nextBtn.addEventListener("click", () => {
  counter ++;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  counter --;
  updateSlider();
});

function updateSlider() {

  if (counter === slides.childElementCount) {
    counter = 0;
  } else if (counter < 0) {
    counter = slides.childElementCount - 1;
  }

  slides.style.transform = `translateX(${-counter * slideWidth}px)`;

};

const slidesAbout = document.querySelector(".slides-about");
const prevBtnAbout = document.querySelector(".prevBtnAbout");
const nextBtnAbout = document.querySelector(".nextBtnAbout");

let counterAbout = 0;
const slideWidthAbout = 720;

nextBtnAbout.addEventListener("click", () => {
  counterAbout ++;
  updateSliderAbout();
});

prevBtnAbout.addEventListener("click", () => {
  counterAbout --;
  updateSliderAbout();
});

function updateSliderAbout() {

  if (counterAbout === slidesAbout.childElementCount) {
    counterAbout = 0;
  } else if (counterAbout < 0) {
    counterAbout = slidesAbout.childElementCount - 1;
  }

  slidesAbout.style.transform = `translateX(${-counterAbout * slideWidthAbout}px)`;

}

const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const mobileMenu = document.querySelector('.mobile-nav');

mobileMenuIcon.addEventListener('click', () => {
  if(mobileMenu.style.display === 'block') {
    mobileMenu.style.display = 'none';
  } else {
    mobileMenu.style.display = 'block';
  }
})


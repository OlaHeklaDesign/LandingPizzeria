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
  })

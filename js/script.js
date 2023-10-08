document.addEventListener("DOMContentLoaded", function () {
  const categories = document.querySelectorAll(".category-title");
  const subcategories = document.querySelectorAll(".subcategory");
  const projects = document.querySelectorAll(".project");

  function toggleVisibility(element) {
    element.classList.toggle("open");
  }

  categories.forEach((category) => {
    category.addEventListener("click", function () {
      toggleVisibility(this.parentElement);
    });
  });

  subcategories.forEach((subcategory) => {
    subcategory.addEventListener("click", function () {
      toggleVisibility(this.querySelector(".projects-list"));
    });
  });

  projects.forEach((project) => {
    project.addEventListener("click", function () {
      toggleVisibility(this);
    });
  });
});

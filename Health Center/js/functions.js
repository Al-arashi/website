document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.querySelector(".toggle-btn");
  const toggledLinks = document.querySelector(".toggled-links");
  const closeBtn = document.querySelector(".close-btn");

  toggleBtn.addEventListener("click", function () {
    toggledLinks.style.display =
      toggledLinks.style.display === "flex" ? "none" : "flex";
  });

  closeBtn.addEventListener("click", function () {
    toggledLinks.style.display = "none";
  });

  // Hide the toggled menu on window resize
  window.addEventListener("resize", function () {
    if (window.innerWidth > 768) {
      toggledLinks.style.display = "none"; // Hide the toggled menu on larger screens
    }
  });
});
let currentIndex = 0;
const imgs = document.querySelectorAll(".carousel-img");
const totalItems = imgs.length;

function showNextSlide() {
  currentIndex = (currentIndex + 1) % totalItems; // Loop back to the first slide
  const offset = currentIndex * 100; // Calculate the offset
  document.querySelector(
    ".carousel-inner"
  ).style.transform = `translateX(${offset}%)`;
}

setInterval(showNextSlide, 4000);

const typed = new Typed(".multiple-text", {
  strings: [
    " مركز قوة الحركة للتأهيل الطبي ",
    " خدمات على أعلى مستوى ",
    " من خدماتنا العلاج النفسي ",
    "من خدماتنا العلاج الوظيفي",
    "و أكثر ...",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

var divs = document.getElementsByClassName("input-container");

for (var i = 0; i < divs.length; i++) {
  divs[i].addEventListener("click", function (event) {
    // Prevent the click event from bubbling up to the document
    event.stopPropagation();

    // Reset the outline for all containers
    for (var j = 0; j < divs.length; j++) {
      divs[j].classList.remove("outline"); // Remove outline class
    }

    // Add outline class to the clicked container
    this.classList.add("outline");
  });
}

// Add click event listener to the document
document.addEventListener("click", function () {
  // Reset the outline for all input-container elements
  for (var j = 0; j < divs.length; j++) {
    divs[j].classList.remove("outline"); // Remove outline class
  }
});

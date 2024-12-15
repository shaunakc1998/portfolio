// Toggle Mobile Menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
});

// Skills Filter Functionality (Without "All" Filter)
const filterButtons = document.querySelectorAll(".filter-btn");
const skillItems = document.querySelectorAll(".skill-item");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all buttons
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    // Add active class to the clicked button
    button.classList.add("active");

    const filter = button.getAttribute("data-filter");

    skillItems.forEach((item) => {
      if (item.classList.contains(filter)) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });

    // Refresh AOS to detect new elements
    AOS.refresh();
  });
});

// Initialize AOS
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true, // Whether animation should happen only once - while scrolling down
});

// Set Default Skills Filter to "Programming & Development"
document.addEventListener("DOMContentLoaded", () => {
  const defaultFilterButton = document.querySelector(
    '.filter-btn[data-filter="programming"]'
  );
  if (defaultFilterButton) {
    defaultFilterButton.click();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  menuToggle.addEventListener("click", () => {
    mobileMenu.classList.toggle("active"); // Toggle visibility
    menuToggle.classList.toggle("is-open"); // Animate hamburger button
  });
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

// Typewriter Effect
const words = ["Experiences", "Dreams", "Solutions", "Stories"];
let wordIndex = 0;
let charIndex = 0;
const speed = 150; // Typing speed in milliseconds
const heroSpan = document.querySelector(".highlight");

function typeWriter() {
  if (charIndex < words[wordIndex].length) {
    heroSpan.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(eraseWord, 1000); // Pause before erasing
  }
}

function eraseWord() {
  if (charIndex > 0) {
    heroSpan.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseWord, speed / 2);
  } else {
    wordIndex = (wordIndex + 1) % words.length; // Move to the next word
    setTimeout(typeWriter, speed);
  }
}

// Start the typewriter effect on load
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(typeWriter, speed);
});

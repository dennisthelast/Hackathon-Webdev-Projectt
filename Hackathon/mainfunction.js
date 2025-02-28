// mainfunction.js
document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const dropdown = document.querySelector(".dropdown");
  const dropbtn = document.querySelector(".dropbtn");
  const dropdownContent = document.querySelector(".dropdown-content");
  const form = document.querySelector("form");
  const tooltipTrigger = document.querySelectorAll("[data-tooltip]");

  // Toggle menu
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // Close menu when a link is clicked
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
    });
  });

  // Add hover effect
  navLinks.forEach((link) => {
    link.addEventListener("mouseover", function () {
      link.style.color = "#ff9800";
    });
    link.addEventListener("mouseout", function () {
      link.style.color = "#fff";
    });
  });

  // Dropdown menu functionality
  dropbtn.addEventListener("click", function () {
    dropdownContent.classList.toggle("show");
  });

  window.addEventListener("click", function (event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.classList.remove("show");
    }
  });

  // Form validation and submission handling
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const message = document.querySelector("#message").value;

    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }

    // Submit form data to server or API
    console.log("Form submitted:", name, email, message);
  });

  // Tooltip functionality
  tooltipTrigger.forEach((trigger) => {
    trigger.addEventListener("mouseover", function () {
      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.textContent = trigger.getAttribute("data-tooltip");
      trigger.appendChild(tooltip);
    });

    trigger.addEventListener("mouseout", function () {
      const tooltip = trigger.querySelector(".tooltip");
      if (tooltip) {
        tooltip.remove();
      }
    });
  });

  // Scrolling animation
  const scrollElements = document.querySelectorAll(".scroll-animation");
  scrollElements.forEach((element) => {
    element.addEventListener("scroll", function () {
      const scrollPosition = element.scrollTop;
      const maxScrollPosition = element.scrollHeight - element.clientHeight;
      const animationProgress = scrollPosition / maxScrollPosition;

      // Animate elements based on scroll position
      console.log("Scroll animation progress:", animationProgress);
    });
  });

  // Loading animation
  const loadingAnimation = document.querySelector(".loading-animation");
  if (loadingAnimation) {
    setTimeout(function () {
      loadingAnimation.classList.add("loaded");
    }, 2000);
  }
});

  
  

// Sticky Navigation Menu JS Code
let nav = document.querySelector("nav");
let scrollBtn = document.querySelector(".scroll-button a");
console.log(scrollBtn);
let val;
window.onscroll = function() {
  if (document.documentElement.scrollTop > 20) {
    nav.classList.add("sticky");
    if (scrollBtn) {
      scrollBtn.style.display = "block";
    }
  } else {
    nav.classList.remove("sticky");
    if (scrollBtn) {
      scrollBtn.style.display = "none";
    }
  }
}

// Wrap your code in a DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", function() {
  let body = document.querySelector("body");
  let navBar = document.querySelector(".navbar");
  let menuBtn = document.querySelector(".menu-btn");
  let cancelBtn = document.querySelector(".cancel-btn");

  // Function to toggle active class
  function toggleActiveClass(element) {
    element.classList.toggle("active");
  }

  // Toggle active class on menu button click
  if (menuBtn) {
    menuBtn.addEventListener("click", function() {
      toggleActiveClass(navBar);
      toggleActiveClass(menuBtn);
      body.style.overflow = "hidden";
    });
  }

  // Toggle active class on cancel button click
  if (cancelBtn) {
    cancelBtn.addEventListener("click", function() {
      toggleActiveClass(navBar);
      toggleActiveClass(menuBtn);
      body.style.overflow = "auto";
    });
  }

  // Side Navigation Bar Close While We Click On Navigation Links
  let navLinks = document.querySelectorAll(".menu li a");
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener("click", function() {
      navBar.classList.remove("active");
      if (menuBtn) {
        menuBtn.style.opacity = "1";
        menuBtn.style.pointerEvents = "auto";
      }
    });
  }

  // Skills
  const profiles = document.querySelectorAll('.single-profile');

  profiles.forEach(profile => {
    profile.addEventListener('click', function() {
      const overlay = profile.querySelector('.single-profile-overlay');
      if (overlay.style.transform === 'scale(1)') {
        overlay.style.transform = 'scale(0)';
      } else {
        overlay.style.transform = 'scale(1)';
      }
    });
  });

  // Project
  const projectMenuBtn = document.querySelector('.menu-btn');
  const projectCancelBtn = document.querySelector('.cancel-btn');
  const projectMenu = document.querySelector('.menu');

  projectMenuBtn.addEventListener('click', () => {
    projectMenu.classList.add('active');
    projectMenuBtn.classList.add('hide');
  });

  projectCancelBtn.addEventListener('click', () => {
    projectMenu.classList.remove('active');
    projectMenuBtn.classList.remove('hide');
  });
});








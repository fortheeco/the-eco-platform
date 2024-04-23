
// This script is added by Bilal to test the Navbar functionality
document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.getElementById('navbar');

    // Toggle general dropdown content
    const dropBtn = navbar.querySelector(".btn-toggle");
    const dropContent = navbar.querySelector(".drop-content");
    dropBtn.addEventListener("click", () => {
      if (dropContent.style.display === 'none' || dropContent.style.display === '') {
        dropContent.style.display = 'block';
      } else {
        dropContent.style.display = 'none';
      }
    });

    // Toggle user profile dropdown content
    const userDrop = navbar.querySelector(".user-profile-btn");
    const userContent = navbar.querySelector(".user-content");
    userDrop.addEventListener("click", () => {
      console.log("button clicked");
      if (userContent.style.display === 'none' || userContent.style.display === '') {
        userContent.style.display = 'block';
      } else {
        userContent.style.display = 'none';
      }
    });

    // Handle smaller navigation bar for mobile views
    const menuBtn = document.querySelector('.menu-sm button');
    const navSm = document.querySelector('.nav-sm');
    menuBtn.addEventListener('click', () => {
        const isVisible = navSm.getAttribute('data-visible') === 'true';
        navSm.setAttribute('data-visible', !isVisible);
    });

    // Toggle ECO dropdown
    const ecoDropdownToggle = document.querySelector('.btn-toggle-sm');
    const ecoDropdownContent = document.querySelector('.drop-content-sm');
    ecoDropdownToggle.addEventListener('click', () => {
        ecoDropdownContent.classList.toggle('drop-display');
    });
});




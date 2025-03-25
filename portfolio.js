// Smooth Scrolling for Navigation Links
document.querySelectorAll('header nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Add a dynamic year in the footer
const footer = document.querySelector('footer p');
const currentYear = new Date().getFullYear();
footer.innerHTML = `&copy; ${currentYear} Rathlavath Rajesh. All rights reserved.`;

// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".query-box form");
  
    form.addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent default form submission
  
      // Get form values
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const message = document.getElementById("message").value.trim();
  
      // Simple validation
      if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return;
      }
  
      if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return;
      }
  
      // Simulate successful submission (you can replace this with your server-side logic)
      alert(`Thank you, ${name}! Your query has been submitted successfully.`);
      form.reset(); // Clear the form
    });
  
    // Function to validate email format
    function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
    }
  });
  
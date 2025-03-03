// script.js - JavaScript for Form Handling & Validation

document.addEventListener("DOMContentLoaded", function() {
    const signInForm = document.getElementById('signInForm');
    const signUpForm = document.getElementById('signUpForm');
    const landingPage = document.getElementById('landingPage');
  
    // Show Sign In Form
    window.showSignIn = function() {
      landingPage.classList.add("hidden");
      signUpForm.classList.add("hidden");
      signInForm.classList.remove("hidden");
      signInForm.classList.add("fade-in");
    };
  
    // Show Sign Up Form
    window.showSignUp = function() {
      landingPage.classList.add("hidden");
      signInForm.classList.add("hidden");
      signUpForm.classList.remove("hidden");
      signUpForm.classList.add("fade-in");
    };
  
    // Sign In Form Validation
    signInForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const username = document.getElementById('signin-username').value.trim();
      const password = document.getElementById('signin-password').value;
  
      if (username === "" || password === "") {
        alert("All fields are required!");
        return;
      }
  
      alert("Sign In Successful!");
      signInForm.reset();
    });
  
    // Sign Up Form Validation
    signUpForm.addEventListener('submit', function(e) {
      e.preventDefault();
  
      const username = document.getElementById('signup-username').value.trim();
      const email = document.getElementById('signup-email').value.trim();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      const age = document.getElementById('signup-age').value.trim();
      const phone = document.getElementById('signup-phone').value.trim();
      const address = document.getElementById('signup-address').value.trim();
      const gender = document.getElementById('signup-gender').value;
  
      const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const passwordRegex = /^(?=.*[!@#$%^&*])(?=.*\d).{6,}$/;
      const phoneRegex = /^\d{11}$/; // Only digits, exactly 11 numbers
  
      if (!username || !email || !password || !confirmPassword || !age || !phone || !address || !gender) {
        alert("All fields are required!");
        return;
      }
  
      if (!emailRegex.test(email)) {
        alert("Invalid email format!");
        return;
      }
  
      if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters with one special character and one number.");
        return;
      }
  
      if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
      }
  
      if (isNaN(age) || age < 18 || age > 100) {
        alert("Age must be between 18 and 100.");
        return;
      }
  
      if (!phoneRegex.test(phone)) {
        alert("Phone number must be exactly 11 digits and contain only numbers.");
        return;
      }
  
      alert("Sign Up Successful!");
      signUpForm.reset();
    });
  });
  
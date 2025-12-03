const loginTab = document.getElementById("loginTab");
const signupTab = document.getElementById("signupTab");

loginTab.addEventListener("click", function () {
  loginTab.classList.add("active");
  signupTab.classList.remove("active");
});

signupTab.addEventListener("click", function () {
  signupTab.classList.add("active");
  loginTab.classList.remove("active");
  alert("Sign Up form would be displayed here");
});

// Form submission
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email && password) {
    // Store user info in localStorage
    localStorage.setItem("userEmail", email);
    localStorage.setItem("isLoggedIn", "true");

    // Show loading state
    const submitBtn = document.querySelector(".btn-primary");
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    submitBtn.disabled = true;

    // Simulate a brief loading period, then redirect
    setTimeout(() => {
      window.location.href = "dashboard.html";
    }, 800);
  }
});

// Input focus effects
const inputs = document.querySelectorAll(".form-input");
inputs.forEach((input) => {
  input.addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)";
    this.parentElement.style.transition = "transform 0.2s";
  });

  input.addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)";
  });
});

// Help button
const helpBtn = document.querySelector(".btn-secondary");
helpBtn.addEventListener("click", function () {
  alert(
    "Need help? Contact us at support@taskmaster.com or visit our help center."
  );
});

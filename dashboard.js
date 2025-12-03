// Navigation functionality
const navItems = document.querySelectorAll(".nav-item");
navItems.forEach((item) => {
  item.addEventListener("click", function () {
    navItems.forEach((nav) => nav.classList.remove("active"));
    this.classList.add("active");
  });
});

// Quick action items click handlers
const actionItems = document.querySelectorAll(".action-item");
actionItems.forEach((item) => {
  item.addEventListener("click", function () {
    const actionTitle = this.querySelector("h4").textContent;
    alert(`Opening: ${actionTitle}`);
  });
});

// Logout button
c; // Logout button
const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to logout?")) {
    // Clear login data
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");

    // Redirect to login page
    window.location.href = "index.html";
  }
});

// Check if user is logged in
const isLoggedIn = localStorage.getItem("isLoggedIn");
const userEmail = localStorage.getItem("userEmail");

if (!isLoggedIn) {
  // Redirect to login page if not logged in
  window.location.href = "index.html";
} else {
  // Extract user name from email
  const userName = userEmail
    ? userEmail.split("@")[0].replace(/[._]/g, " ")
    : "User";

  // Update user profile
  document.querySelector(".user-details h3").textContent = userName;
  document.querySelector(".user-details p").textContent = userEmail;

  // Update greeting based on time of day
  // Check if user is logged in
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  const userEmail = localStorage.getItem("userEmail");

  if (!isLoggedIn) {
    // Redirect to login page if not logged in
    window.location.href = "index.html";
  } else {
    // Extract user name from email
    const userName = userEmail
      ? userEmail.split("@")[0].replace(/[._]/g, " ")
      : "User";

    // Update user profile
    document.querySelector(".user-details h3").textContent = userName;
    document.querySelector(".user-details p").textContent = userEmail;

    // Update greeting based on time of day
    function updateGreeting() {
      const hour = new Date().getHours();
      const headerTitle = document.querySelector(".header h1");

      let greeting = "Good morning";
      if (hour >= 12 && hour < 17) {
        greeting = "Good afternoon";
      } else if (hour >= 17) {
        greeting = "Good evening";
      }

      headerTitle.textContent = `${greeting}, ${userName}!`;
    }

    updateGreeting();
  }
}

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
const logoutBtn = document.querySelector(".logout-btn");
logoutBtn.addEventListener("click", function () {
  if (confirm("Are you sure you want to logout?")) {
    alert("Logging out...");
  }
});

// Update greeting based on time of day
function updateGreeting() {
  const hour = new Date().getHours();
  const headerTitle = document.querySelector(".header h1");
  const userName = "mariam mussa";

  let greeting = "Good morning";
  if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
  } else if (hour >= 17) {
    greeting = "Good evening";
  }

  headerTitle.textContent = `${greeting}, ${userName}!`;
}

updateGreeting();

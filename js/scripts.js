// Waits until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const navigation = document.querySelector(".navigation");

  function toggleNavigation() {
    navigation.classList.toggle("hidden");
  }

  checkbox.addEventListener("change", toggleNavigation);
});

document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const navigation = document.querySelector(".navigation");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      navigation.classList.remove("navigation--close");
      navigation.classList.add("navigation--open");
    } else {
      navigation.classList.remove("navigation--open");
      navigation.classList.add("navigation--close");

      setTimeout(() => {
        navigation.classList.remove("navigation--close");
      }, 450);
    }
  });
});

function handleResize() {
  const navigation = document.querySelector(".navigation");
  const isDesktop = window.innerWidth >= 1024;

  if (isDesktop) {
    navigation.classList.remove("navigation--open", "navigation--close");
  }
}

window.addEventListener("resize", handleResize);

window.addEventListener("DOMContentLoaded", handleResize);

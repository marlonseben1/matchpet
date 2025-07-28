document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const navigation = document.querySelector(".navigation");
  const body = document.body;
  let scrollY = 0;

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Open nav
      navigation.classList.remove("navigation--close");
      navigation.classList.add("navigation--open");

      // Lock scroll
      scrollY = window.scrollY;
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.classList.add("no-scroll");
    } else {
      // Close nav
      navigation.classList.remove("navigation--open");
      navigation.classList.add("navigation--close");

      // Unlock scroll after animation finishes
      setTimeout(() => {
        navigation.classList.remove("navigation--close");

        // Restore scroll
        body.classList.remove("no-scroll");
        body.style.position = "";
        body.style.top = "";
        window.scrollTo(0, scrollY);
      }, 450);
    }
  });
});

function handleResize() {
  const navigation = document.querySelector(".navigation");
  const isDesktop = window.innerWidth >= 1024;
  const checkbox = document.getElementById("checkbox");
  const body = document.body;

  if (isDesktop) {
    navigation.classList.remove("navigation--open", "navigation--close");

    // Reset body scroll in case it was locked
    body.classList.remove("no-scroll");
    body.style.position = "";
    body.style.top = "";
    if (checkbox) checkbox.checked = false;
  }
}

window.addEventListener("resize", handleResize);
window.addEventListener("DOMContentLoaded", handleResize);

const carousel = document.querySelector(".carousel");

let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener("mousedown", (e) => {
  isDown = true;
  carousel.classList.add("dragging");
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mouseleave", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

carousel.addEventListener("mouseup", () => {
  isDown = false;
  carousel.classList.remove("dragging");
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 1.5; // drag sensitivity
  carousel.scrollLeft = scrollLeft - walk;
});

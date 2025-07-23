document.addEventListener("DOMContentLoaded", function () {
  const checkbox = document.getElementById("checkbox");
  const navigation = document.querySelector(".navigation");

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      // Remove a animação de saída e aplica a de entrada
      navigation.classList.remove("navigation--close");
      navigation.classList.add("navigation--open");
    } else {
      // Remove a animação de entrada e aplica a de saída
      navigation.classList.remove("navigation--open");
      navigation.classList.add("navigation--close");

      // Após a animação de saída, desativa pointer-events
      setTimeout(() => {
        navigation.classList.remove("navigation--close");
      }, 450); // Duração da animação
    }
  });
});

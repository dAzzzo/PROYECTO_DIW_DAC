function cambiarColor() {
  //Obtener el boton toggle
  let toggleButton = document.getElementById("button");

  toggleButton.addEventListener("", function () {
    let body = document.querySelector("body");

    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");

      toggleButton.innerHTML = "modo oscuro";
    } else {
      body.classList.add("dark-mode");

      toggleButton.innerHTML = "modo claro";
    }
  });
}

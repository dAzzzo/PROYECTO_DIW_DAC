function cambiarColor() {
  let toggleButton = document.getElementById("button");

  if (document.body.classList.contains("dark-mode")) {
    document.body.classList.remove("dark-mode");
    toggleButton.innerHTML = "☼";
  } else {
    document.body.classList.add("dark-mode");
    toggleButton.innerHTML = "☾";
  }
}

function myFunction1() {
  var x = document.querySelector(".grille1");
  if (x.style.display === "grid") {
    x.style.display = "none";
  } else {
    x.style.display = "grid";
  }
}

const loveLetter = document.getElementById("loveLetter");

document.addEventListener("mouseover", function(e) {
  if (e.target.id === "loveLetter") {
    loveLetter.style.left = e.pageX - (loveLetter.offsetWidth / 2) + "px";
    loveLetter.style.top = e.pageY - (loveLetter.offsetHeight / 2) + "px";
  }
});

document.addEventListener("mouseout", function(e) {
  if (e.target.id === "loveLetter") {
    loveLetter.style.left = "50%";
    loveLetter.style.top = "50%";
  }
});
https://www.w3schools.com/w3css/w3css_tabulators.asp
function openContent(contentName) {
  var i;
  var x = document.getElementsByClassName("content");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(contentName).style.display = "block";
}
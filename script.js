https://www.w3schools.com/w3css/w3css_tabulators.asp
function openContent(contentName) {
  var contentList = document.getElementsByClassName("content");
  for (var x = 0; x < contentList.length; x++) {
    contentList[x].style.display = "none";
  }
  document.getElementById(contentName).style.display = "block";
}

function widenLine(itemLine) {
  var itemList = document.getElementsByClassName("line");
  for (var x = 0; x < itemList.length; x++) {
    itemList[x].classList.remove("project-item-selected");
  }
  document.getElementById(itemLine).classList.add("project-item-selected")
}
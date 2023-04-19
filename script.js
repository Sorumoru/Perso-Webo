https://www.w3schools.com/w3css/w3css_tabulators.asp
function openContent(contentName, itemLine) {

  var contentList = document.getElementsByClassName("content");
  for (var x = 0; x < contentList.length; x++) {
    contentList[x].style.display = "none";
  }
  document.getElementById(contentName).style.display = "block";

  var itemList = document.getElementsByClassName("line");
  for (var x = 0; x < itemList.length; x++) {
    itemList[x].style.width = "50%";
  }
  document.getElementById(itemLine).style.width = "100%";
}

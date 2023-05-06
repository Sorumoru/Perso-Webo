/**
 * This function displays the content that is selected by the user.
 * source used: https://www.w3schools.com/w3css/w3css_tabulators.asp
 * 
 * @param {string} contentName The class name of the div to be displayed.
 */
function displayContent(contentName) {
  var contentList = document.getElementsByClassName("content");
  for (var x = 0; x < contentList.length; x++) {
    contentList[x].style.display = "none";
  }
  document.getElementById(contentName).style.display = "block";
}

/**
 * This function widens the hr line that is selected by the user.
 * 
 * @param {string} itemLine The class name of the hr to be widened.
 */
function widenLine(itemLine) {
  var itemList = document.getElementsByClassName("line");
  for (var x = 0; x < itemList.length; x++) {
    itemList[x].classList.remove("project-item-selected");
  }
  document.getElementById(itemLine).classList.add("project-item-selected")
}

function changeTheme() {

}
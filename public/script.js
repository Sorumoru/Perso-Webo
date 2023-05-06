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

/**
 * This function randomly changes the theme and colors of the website on load.
 */
function changeTheme() {
  var randomThemeNumber = Math.floor(Math.random() * 2);

  var root = document.querySelector(':root');

  const map0 = new Map();

  map0.set('border-theme', 'linear-gradient(75deg, rgba(255, 215, 0, 1) 0%, rgba(255, 165, 0, 1) 13%, rgba(255, 215, 0, 1) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 215, 0, 1) 60%, rgba(255, 165, 0, 1) 80%, rgba(255, 215, 0, 1) 100%)');
  map0.set('bg-color', 'rgb(28, 28, 28)');
  map0.set('font-color', 'rgb(255, 255, 255)');
  map0.set('font-color-faint', 'rgb(92, 92, 92)');

  const map1 = new Map();

  map1.set('border-theme', 'rgb(0, 0, 0)');
  map1.set('bg-color', 'rgb(200, 200, 200)');
  map1.set('font-color', 'rgb(10, 10, 10)');
  map1.set('font-color-faint', 'rgb(100, 100, 100)');

  var themeArray = [map0, map1]

  root.style.setProperty('--border-theme', themeArray[randomThemeNumber].get('border-theme'));
  root.style.setProperty('--bg-color', themeArray[randomThemeNumber].get('bg-color'));
  root.style.setProperty('--font-color', themeArray[randomThemeNumber].get('font-color'));
  root.style.setProperty('--font-color-faint', themeArray[randomThemeNumber].get('font-color-faint'));
  // root.style.setProperty('--bg-color', 'red');

}
/**
 * Checks if the browser's in light mode or dark mode and configures the website
 * based off of that.
 */
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // Dark mode is enabled
  console.log("Dark mode is enabled");
  document.getElementById("moon").classList.add("hide");
  document.getElementById("sun").classList.remove("hide");

} else {
  // Dark mode is not enabled
  console.log("Dark mode is not enabled");
  document.getElementById("moon").classList.remove("hide");
  document.getElementById("sun").classList.add("hide");
  document.body.classList.toggle('light-mode');
}

/**
 * Toggling between light mode and dark mode.
 */
document.querySelector(".light-switch").addEventListener("click", () => {
  document.body.classList.toggle("light-mode")
  document.getElementById("moon").classList.toggle("hide");
  document.getElementById("sun").classList.toggle("hide");
})

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
    itemList[x].classList.remove("button-item-selected");
  }
  document.getElementById(itemLine).classList.add("button-item-selected")
}

/**
 * This function produces the different themes and colors as objects for easier navigation.
 * 
 * @returns An array of objects with differing themes and colors.
 */
function produceThemes() {

  const theme0 = {
    'border-theme': 'linear-gradient(65deg, rgba(255, 215, 0, 1) 0%, rgba(255, 165, 0, 1) 13%, rgba(255, 215, 0, 1) 40%, rgba(255, 255, 255, 1) 50%, rgba(255, 215, 0, 1) 60%, rgba(255, 165, 0, 1) 80%, rgba(255, 215, 0, 1) 100%)',
    'bg-color': 'rgb(25, 25, 25)',
    'font-color': 'rgb(255, 255, 255)',
    'font-color-faint': 'rgb(92, 92, 92)',
    'selection-color': 'rgb(255, 14, 151)'
  }
  const theme1 = {
    'border-theme': 'rgb(0, 0, 0)',
    'bg-color': 'rgb(200, 200, 200)',
    'font-color': 'rgb(10, 10, 10)',
    'font-color-faint': 'rgb(100, 100, 100)',
    'selection-color': 'rgb(0, 0, 0)'
  }

  const theme2 = {
    'border-theme': 'rgb(255, 0, 140)',
    'bg-color': 'rgb(0, 0, 0)',
    'font-color': 'rgb(0, 255, 255)',
    'font-color-faint': 'rgb(0, 125, 125)',
    'selection-color': 'yellow'
  }

  var themeArray = [theme0, theme1, theme2];

  return themeArray;
}

/**
 * This function randomly changes the theme and colors of the website.
 * Should be used on page load.
 * 
 * Not in use for now.
 */
function changeTheme() {

  var root = document.querySelector(':root');
  var themeArray = produceThemes();
  var randomNumber = Math.floor(Math.random() * 3);
  var randomTheme = themeArray[randomNumber];

  root.style.setProperty('--border-theme', randomTheme["border-theme"]);
  root.style.setProperty('--bg-color', randomTheme["bg-color"]);
  root.style.setProperty('--font-color', randomTheme["font-color"]);
  root.style.setProperty('--font-color-faint', randomTheme["font-color-faint"]);
  root.style.setProperty('--selection-color', randomTheme["selection-color"]);
}
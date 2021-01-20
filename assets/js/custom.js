/* CssSwitcher js */
function handleThemeSwitcher(){

  const cssStyle = document.getElementById('style');
  const themeSwitcher = document.getElementById('themeSwitcher');

  if (themeSwitcher.checked) {
    cssStyle.href = "assets/css/themes.dark.css";
  }
  else {
    cssStyle.href = "assets/css/themes.light.css";
  }
};
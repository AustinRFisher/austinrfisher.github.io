var text = ["EDITORIR", "EDITOR", "MUSICIAN"];
var counter = 0;
var elem = document.getElementById("home-center");
setInterval(change, 1000);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
  }
}

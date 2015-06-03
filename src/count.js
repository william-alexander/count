var count = {
  textarea: document.getElementById("textarea"),
  word: document.getElementById("word"),
  char: document.getElementById("char")
}

function update() {
  var value = textarea.value;
  var char = value.length;
  count.char.textContent = char;
  count.word.textContent = char === 0 ? 0 : textarea.value.split(" ").length;
}

window.addEventListener("load", update);
textarea.addEventListener("keydown", update);

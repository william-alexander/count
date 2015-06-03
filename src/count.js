var count = {
  textarea: document.getElementById("textarea"),
  word: document.getElementById("word"),
  char: document.getElementById("char")
}

function update() {
  var value = textarea.value;
  count.char.textContent = value.length;
  count.word.textContent = word(value);
}

function word(value) {
  var newWord = false;
  var count = 0;

  for (var i = 0; i < value.length; ++i) {
    var word = newWord;
    newWord = !/\s/.test(value.charAt(i));
    if (!word && newWord) ++count;
  }

  return count;
}

window.addEventListener("load", update);
textarea.addEventListener("input", update);

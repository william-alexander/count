var count = {
  textarea: document.getElementById("textarea"),
  word: document.getElementById("word"),
  words: document.getElementById("words"),
  char: document.getElementById("char"),
  chars: document.getElementById("chars")
}

function process() {
  var value = textarea.value;
  update(count.char, count.chars, value.length);
  update(count.word, count.words, word(value));
}

function update(target, plural, length) {
  target.textContent = length;

  if (length === 1) {
    plural.classList.add("hidden");
  } else {
    plural.classList.remove("hidden");
  }
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

window.addEventListener("load", process);
textarea.addEventListener("input", process);

function caesar() {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var text = document.getElementById("text1").value;
  text = text.toUpperCase();

  console.log(text);

  var result = "";
  var counter = 0;
  var maxN = 0;
  var max = "";

  for (let i = 0; i < alphabet.length; i++) {
    var counter = 0;
    for (let j = 0; j < text.length; j++) {
      if (alphabet[i] == text[j]) {
        counter++;
      }
    }
    if (counter > maxN) {
      maxN = counter;
      max = alphabet[i];
    }
  }

  console.log(max);

  console.log(alphabet[4]);

  console.log(alphabet.indexOf(max));

  if (alphabet.indexOf(max) < 4) {
    var caesarShift = 22 + alphabet.indexOf(max);
  } else {
    var caesarShift = alphabet.indexOf(max) - 4;
  }

  console.log("CeaserShift: " + caesarShift);

  var newAlphabet = alphabet;
  newAlphabet = newAlphabet.slice(caesarShift);
  for (let i = 0; i < caesarShift; i++) {
    newAlphabet += alphabet[i];
  }

  console.log("Input: \t" + newAlphabet);
  console.log("Output: " + alphabet);

  for (let i = 0; i < text.length; i++) {
    if (text[i].match(/[a-z]/i)) {
      result += alphabet[newAlphabet.indexOf(text[i])];
    } else {
      result += text[i];
    }
  }

  console.log(result);

  document.getElementById("text2").value = result;
  document.getElementById("sum").innerHTML = text.length;
  document.getElementById("step").innerHTML = caesarShift;
  document.getElementById("in").innerHTML = newAlphabet;
  document.getElementById("out").innerHTML = alphabet;
}

function showHelp(hint) {
  document.getElementById("hints").innerHTML = hint.hintMessage;
}

function helpCallback(hint) {
  return function () {
    showHelp(hint);
  };
}

function setUpHelp() {
  // initialization of the helpful hints functionality
  var helpfulHints = [
    { id: "email", hintMessage: "type in your best email address?" },
    { id: "name", hintMessage: "type in your full name" },
    { id: "age", hintMessage: "how old are you?" },
  ];

  for (var i = 0; i < helpfulHints.length; i++) {
    var hint = helpfulHints[i];
    document.getElementById(helpfulHints[i].id).onfocus = helpCallback(hint);
  }
}
let thisThingy = { this: "yeah", that: "yo" };

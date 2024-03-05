function calc() {
  var ope1 = document.getElementById("first").value;
  var ope2 = document.getElementById("second").value;

  var operation = document.getElementById("opera").value;

  if (operation == "+") {
    var res = parseInt(ope1) + parseInt(ope2);
  }
  if (operation == "-") {
    var res = parseInt(ope1) - parseInt(ope2);
  }
  if (operation == "*") {
    var res = parseInt(ope1) * parseInt(ope2);
  }
  if (operation == "/") {
    var res = parseInt(ope1) / parseInt(ope2);
  }

  document.getElementById("result").value = res;
  document.getElementById("resultMessage").textContent =
    "Your result is " + res;
}

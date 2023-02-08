let calc = document.querySelector(".calc");
let result = document.querySelector(".result");

function clean() {
  result.innerHTML = "";
  calc.innerHTML = "";
}

function insert(num) {
  calc.innerHTML += num;
}

function calculator() {
  let expression = calc.innerHTML;
  if (expression) {
    try {
      document.querySelector(".result").innerHTML = math
        .evaluate(expression)
        .toFixed(2);
    } catch (error) {
      console.error(error);
      document.querySelector(".result").innerHTML =
        "Expression error: " + error.message;
    }
  } else {
    document.querySelector(".result").classList.add("result-error");
    document.querySelector(".result").innerHTML = "digite um numero";
  }
}

function back() {
  let expression = calc.innerHTML;
  if (expression) {
    calc.innerHTML = expression.substring(0, expression.length - 1);
  }
}

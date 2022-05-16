function keysFunc(x) {
  let result = document.getElementById("display");

  if (x == "C") {
    location.reload();
  } else if (x == "=") {
    result.value = eval(result.value);
    //   let answer = eval(result.value)
    // result.value = `${answer}`
  } else {
    result.value += `${x}`;
  }
}
// keysFunc();

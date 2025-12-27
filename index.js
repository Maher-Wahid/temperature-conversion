const from = document.getElementById("from");
const to = document.getElementById("to");
const value = document.getElementById("value");
const result = document.getElementById("result");
let temp;

function convert() {
  if (!isNaN(value.value)) {
    temp = Number(value.value);
    if (from.value === "celsius" && to.value === "fahrenheit") {
      temp = temp * 9 / 5 + 32;
      result.textContent = `= ${temp.toFixed(1)}°F`
    } else if (from.value === "fahrenheit" && to.value === "celsius") {
      temp = (temp - 32) * (5/9);
      result.textContent = `= ${temp.toFixed(1)}°C`
    } else {
      result.textContent = `= ${value.value}`;
    } 
  } else {
    result.textContent = "= ";
  }
}

/*


*/
const c = document.getElementById("Celsius");

function konversiToFahrenheit() {
  if (c.value.length > 1 && c.value.startsWith("0")) {
    document.getElementById("HasilFahrenheit").textContent = "Input tidak valid";
    // const inputValid = document.createElement("p");
    // inputValid.textContent = "Input tidak valid";
    // document.body.appendChild(inputValid);
    // document.getElementById("HasilFahrenheit").appendChild(inputValid);
    return;
  } else {
    const f = c.value * 1.8 + 32;
    document.getElementById("HasilFahrenheit").textContent = f;
  }
}

function reset() {
  c.value = "";
  document.getElementById("HasilFahrenheit").textContent = "";
}

// c.addEventListener("input", function () {
//     const f = (c.value * 1.8) + 32;
//     document.getElementById("Fahrenheit").value = f;
// });

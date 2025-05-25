const c = document.getElementById("Celsius");
const fOutput = document.getElementById("HasilFahrenheit");

function konversiToFahrenheit() {
  if (c.value.length > 1 && c.value.startsWith("0") && !c.value.startsWith("0.")) {
    fOutput.textContent = "Input tidak valid";
    return;
  } else {
    const f = c.value * 1.8 + 32;
    fOutput.textContent = f;
  }
}

function reset() {
  c.value = "";
  fOutput.textContent = "";
}
const c = document.getElementById("Celsius");

function konversiToFahrenheit() {
    const f = ((c.value * 1.8) + 32)
    document.getElementById("HasilFahrenheit").textContent = f
}

function reset() {
    document.getElementById("Celsius").value = ""
    document.getElementById("HasilFahrenheit").textContent = ""
}

// c.addEventListener("input", function () {
//     const f = (c.value * 1.8) + 32;
//     document.getElementById("Fahrenheit").value = f;
// });
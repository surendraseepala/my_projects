function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var resultElement = document.getElementById("result");

    if (unit === "celsius") {
        var fahrenheit = (temperature * 9 / 5) + 32;
        resultElement.innerText = temperature + " Celsius is " + fahrenheit.toFixed(2) + " Fahrenheit.";
    } else if (unit === "fahrenheit") {
        var celsius = (temperature - 32) * 5 / 9;
        resultElement.innerText = temperature + " Fahrenheit is " + celsius.toFixed(2) + " Celsius.";
    } else {
        resultElement.innerText = "Invalid unit. Please select Celsius or Fahrenheit.";
    }
}
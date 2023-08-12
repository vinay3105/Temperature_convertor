document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const celsiusInput = document.getElementById("celsius");
    const result = document.getElementById("result");
  
    convertBtn.addEventListener("click", function () {
      const celsius = parseFloat(celsiusInput.value);
      if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        result.innerText = `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F`;
      } else {
        result.innerText = "Please enter a valid temperature in Celsius.";
      }
    });
  });
  
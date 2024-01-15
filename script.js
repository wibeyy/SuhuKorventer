function convertTemperature() {
    // Ambil nilai suhu Celsius dari input
    var celsius = parseFloat(document.getElementById('inputCelsius').value);

    // Lakukan konversi ke Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;

    // Tampilkan hasil konversi pada output
    document.getElementById('outputFahrenheit').textContent = fahrenheit.toFixed(2);
}

// Simulasi data cuaca
const weatherData = {
  "Jakarta": { temperature: 30, condition: "Cerah" },
  "Bandung": { temperature: 25, condition: "Hujan Ringan" },
  "Surabaya": { temperature: 33, condition: "Panas Terik" },
  "Samarinda": { temperature: 28, condition: "Mendung" },
  "Medan": { temperature: 29, condition: "Berawan" },
  "Balikpapan": { temperature: 27, condition: "Gerimis" }
};

document.getElementById("showWeatherBtn").addEventListener("click", () => {
  const cityInput = document.getElementById("cityInput").value.trim();
  const city = cityInput.charAt(0).toUpperCase() + cityInput.slice(1).toLowerCase();

  if (weatherData[city]) {
    const { temperature, condition } = weatherData[city];
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${temperature}°C`);
    console.log(`Kondisi: ${condition}`);
  } else {
    console.log(`Data cuaca untuk kota "${city}" tidak tersedia.`);
  }
});

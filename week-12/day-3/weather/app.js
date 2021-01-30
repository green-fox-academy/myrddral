const express = require("express");
const app = express();
const PORT = 3000;

const forecasts = [
    {
      varos: 'Seattle',
      helyszin: 'Washington, United States',
      idojaras: [
        { homerseklet: 11, icon: 'cloudy', uzenet: 'Teljes szürkeség.' },
        { homerseklet: 11, icon: 'cloudy', uzenet: 'Inkább maradj ágyban.' },
        { homerseklet: 13, icon: 'cloudy', uzenet: 'Uncsi...' },
        { homerseklet: 12, icon: 'cloudy', uzenet: 'Még mingig uncsi...' },
        { homerseklet: 13, icon: 'partly_cloudy', uzenet: 'Nem túl napos.' },
      ],
    },
    {
      varos: 'Miami',
      helyszin: 'Florida, United States',
      idojaras: [
        { homerseklet: 33, icon: 'sunny', uzenet: 'Forróság.' },
        { homerseklet: 35, icon: 'sunny', uzenet: 'Túl nagy hőség!' },
        { homerseklet: 34, icon: 'sunny', uzenet: 'Napos.' },
        { homerseklet: 34, icon: 'sunny', uzenet: 'Strandidő!' },
        { homerseklet: 35, icon: 'sunny', uzenet: 'Napsütés.' },
      ],
    },
    {
      varos: 'Barcelona',
      helyszin: 'Spain',
      idojaras: [
        { homerseklet: 19, icon: 'sunny', uzenet: 'Napsütés.' },
        { homerseklet: 15, icon: 'partly_cloudy', uzenet: 'Nem túl napos.' },
        { homerseklet: 17, icon: 'sunny', uzenet: 'Egyelőre szép az idő.' },
        { homerseklet: 16, icon: 'rainy', uzenet: 'Rihanna - Umbrella' },
        { homerseklet: 18, icon: 'sunny', uzenet: 'Ismét napos.' },
      ],
    },
    {
      varos: 'London',
      helyszin: 'United Kingdom',
      idojaras: [
        { homerseklet: 4, icon: 'snowy', uzenet: 'Legyen már vége a télnek.' },
        { homerseklet: 7, icon: 'rainy', uzenet: 'Ugye van nálad esernyő?' },
        { homerseklet: 10, icon: 'rainy', uzenet: 'Megint rainy.' },
        { homerseklet: 9, icon: 'rainy', uzenet: 'Uncsi...' },
        { homerseklet: 11, icon: 'rainy', uzenet: 'Uncsi... Megint.' },
      ],
    },
    {
      varos: 'Budapest',
      helyszin: 'Hungary',
      idojaras: [
        { homerseklet: 12, icon: 'partly_cloudy', uzenet: 'Megint felhős.' },
        { homerseklet: 16, icon: 'rainy', uzenet: 'Túl nedves.' },
        { homerseklet: 18, icon: 'partly_cloudy', uzenet: 'Végre nap.' },
        { homerseklet: 16, icon: 'partly_cloudy', uzenet: 'Nem túl napos.' },
        { homerseklet: 19, icon: 'partly_cloudy', uzenet: 'Elmegy.' },
      ],
    },
  ];

app.set("view engine", "ejs");

app.use("/static", express.static("static"));

app.get("/", (req, res) => {
  res.render("home", {
    forecasts: forecasts,
    title: "Weather Forecast"
  });
});

app.get("/cities/:cityName", (req, res) => {

  let cityName = req.params.cityName;
  let cityWeatherData;

  forecasts.forEach(element => {
    if (element.varos === cityName) {
      cityWeatherData = element;
    }
  });
  res.render("details", {
    cityWeatherData: cityWeatherData
  });
});

app.listen(PORT, () => {
  console.log(`Your app listens on port ${PORT}.`);
});

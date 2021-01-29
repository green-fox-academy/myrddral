const express = require("express");
const app = express();
const PORT = 3000;

const forecasts = [
    {
      varos: 'Seattle',
      helyszin: 'Washington, United States',
      idojaras: [
        { homerseklet: 11, icon: 'felhos', uzenet: 'Teljes szürkeség.' },
        { homerseklet: 11, icon: 'felhos', uzenet: 'Inkább maradj ágyban.' },
        { homerseklet: 13, icon: 'felhos', uzenet: 'Uncsi...' },
        { homerseklet: 12, icon: 'felhos', uzenet: 'Még mingig uncsi...' },
        { homerseklet: 13, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
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
        { homerseklet: 15, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
        { homerseklet: 17, icon: 'sunny', uzenet: 'Egyelőre szép az idő.' },
        { homerseklet: 16, icon: 'esos', uzenet: 'Rihanna - Umbrella' },
        { homerseklet: 18, icon: 'sunny', uzenet: 'Ismét napos.' },
      ],
    },
    {
      varos: 'London',
      helyszin: 'United Kingdom',
      idojaras: [
        { homerseklet: 4, icon: 'snowy', uzenet: 'Legyen már vége a télnek.' },
        { homerseklet: 7, icon: 'esos', uzenet: 'Ugye van nálad esernyő?' },
        { homerseklet: 10, icon: 'esos', uzenet: 'Megint esos.' },
        { homerseklet: 9, icon: 'esos', uzenet: 'Uncsi...' },
        { homerseklet: 11, icon: 'esos', uzenet: 'Uncsi... Megint.' },
      ],
    },
    {
      varos: 'Budapest',
      helyszin: 'Hungary',
      idojaras: [
        { homerseklet: 12, icon: 'reszben_felhos', uzenet: 'Megint felhos.' },
        { homerseklet: 16, icon: 'esos', uzenet: 'Túl nedves.' },
        { homerseklet: 18, icon: 'reszben_felhos', uzenet: 'Végre nap.' },
        { homerseklet: 16, icon: 'reszben_felhos', uzenet: 'Nem túl napos.' },
        { homerseklet: 19, icon: 'reszben_felhos', uzenet: 'Elmegy.' },
      ],
    },
  ];

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set("view engine", "ejs");

app.use("/static", express.static("static"));

// kezdőoldal
app.get("/", (req, res) => {
  // jelenítse meg a `home.ejs`-t
  res.render("home", {
    // title: 'Things to do today:'
    title: "Dashboard"
  });
});

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Your app listens on port ${PORT}.`);
});

const express = require("express");
const app = express();
const PORT = 3000;

const cocktails = [
  {
    name: "GIN FIZZ",
    price: 1520,
    contains: ["gin", "sugar", "lemon juice", "soda"],
    isAlcoholic: true,
  },
  {
    name: "BLOODY MARY",
    price: 1650,
    contains: ["vodka", "tomato juice", "spices"],
    isAlcoholic: true,
  },
  {
    name: "SEX ON THE BEACH",
    price: 1850,
    contains: ["vodka", "peach schnapps", "orange juice", "cranberry juice"],
    isAlcoholic: true,
  },
  {
    name: "CUBA LIBRE",
    price: 1850,
    contains: ["rum", "cola", "lime juice"],
    isAlcoholic: true,
  },
  {
    name: "MOJITO",
    price: 1850,
    contains: ["rum", "sugar", "lime juice", "soda water"],
    isAlcoholic: true,
  },
  {
    name: "LONG ISLAND ICE TEA",
    price: 2450,
    contains: ["vodka", "rum", "gin", "tequila", "triple sec", "cola"],
    isAlcoholic: true,
  },
  {
    name: "VIRGIN MOJITO",
    price: 990,
    contains: ["sugar", "lime juice", "soda water"],
    isAlcoholic: false,
  },
  {
    name: "SAFE SEX ON THE BEACH",
    price: 990,
    contains: ["peach schnapps", "orange juice", "cranberry juice"],
    isAlcoholic: false,
  },
];
const alcoholList = ["gin", "vodka", "rum", "tequila"];
const alcohols = String(alcoholList).toUpperCase().split(",");

// beállítjuk, hogy view engine (nézet motor) az ejs legyen
app.set("view engine", "ejs");

app.use("/static", express.static("static"));

// kezdőoldal
app.get("/", (req, res) => {
  let chosenAlcohol = req.query.alcohol;
  let filteredCocktails = [];

  if (chosenAlcohol) {
    cocktails.forEach(element => {
      if (element.contains.includes(chosenAlcohol)) {
        filteredCocktails.push(element);
      }
    });
  } else {
    filteredCocktails = cocktails;
  }
  res.render("home", {
    // title: 'Things to do today:'
    title: "Cocktails",
    cocktails: filteredCocktails,
    alcoholList: alcoholList,
    alcohols: alcohols,
  });
});

// a 3000-es porton indítsa el az alkalmazást
app.listen(PORT, () => {
  console.log(`Your app listens on port ${PORT}.`);
});

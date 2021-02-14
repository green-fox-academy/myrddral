var express = require("express");
var fs = require('fs');
var app = express();

app.use(express.static("public"));

// const database = {
//   users: [
//     {
//       id: 1,
//       name: "Tim",
//     },
//     {
//       id: 2,
//       name: "Tom",
//     },
//     {
//       id: 3,
//       name: "Rick",
//     },
//     {
//       id: 4,
//       name: "Chuck",
//     },
//     {
//       id: 5,
//       name: "Dan",
//     },
//     {
//       id: 6,
//       name: "James",
//     },
//   ],
//   tickets: [
//     {
//       id: 21,
//       reporter: "Tom",
//       manufacturer: "Dell",
//       serial_number: 123456789,
//       description: "screen pixel error",
//       reported_at: "2018-01-10T23:00:00.000Z",
//     },
//     {
//       id: 27,
//       reporter: "Rick",
//       manufacturer: "Dell",
//       serial_number: 987654321,
//       description: "touchpad is not working",
//       reported_at: "2018-01-17T23:00:00.000Z",
//     },
//     {
//       id: 9,
//       reporter: "Dan",
//       manufacturer: "Lenovo",
//       serial_number: 987655436,
//       description: "my colleague is not working",
//       reported_at: "2018-01-23T23:00:00.000Z",
//     },
//     {
//         id: 1,
//         reporter: "Phil",
//         manufacturer: "Samsung",
//         serial_number: 987651132,
//         description: "my colleague is not working",
//         reported_at: "2018-02-23T23:00:00.000Z",
//       },
//   ]
// };

const jsonContent = fs.readFileSync("data.json", "utf-8");
const database = JSON.parse(jsonContent);

function writeToFile() {
  let jsonToWrite = JSON.stringify(database, null, "\t");
  fs.writeFileSync("data.json", jsonToWrite);
}


app.get("/users", (req, res, next) => {
  res.json(database.users);
});

app.get("/tickets", (req, res, next) => {
  let queryManufacturer = req.query.manufacturer;
  let queryReporter = req.query.reporter;
  let result = [];

  if (Object.keys(req.query).length === 0) {
    res.json(database.tickets);
  } else if (req.query.manufacturer) {
    database.tickets.forEach((element) => {
      if (element.manufacturer.toLowerCase() === queryManufacturer) {
        result.push(element);
      }
    });
  } else if (req.query.reporter) {
    database.tickets.forEach((element) => {
      if (element.reporter.toLowerCase() === queryReporter) {
        result.push(element);
      } else if (element.id === parseInt(queryReporter)) {
        result.push(element);
      }
    });
  }
  res.json(result);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

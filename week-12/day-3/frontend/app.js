const express = require("express");
const app = express();
const PORT = 3000;
const path = require('path');
const bodyParser = require('body-parser')
const { addListener } = require("process");

app.use(express.static('assets'));
app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.hu.html"));
});

app.listen(PORT, () => {
    console.log(`Your app listens on port ${PORT}.`);
});

app.get("/doubling", (req, res) => {
    let input = req.query.input;

    if (input) {
        res.json({
          "received": parseInt(input),
          "result": input*2
        });
    } else {
        res.json({"error": "Please provide an input!"});
    }
});

app.get("/greeter", (req, res) => {
    let name = req.query.name;
    let title = req.query.title;

    if (name && title) {
        res.json({"welcome_message": `Oh, hi there ${name}, my dear ${title}!`});
    } else if (!name && title) {
        res.status(400).json({"error": "Please provide a name!"});
    } else if (name && !title) {
        res.status(400).json({"error": "Please provide a title!"});
    } else {
        res.status(400).json({"error": "Please provide a name and a title!"});
    }
});

app.get("/appenda/:appendable", (req, res) => {
    let appendable = req.params.appendable;

    res.json({
        "appended": `${appendable}a`
    });
});

app.post("/dountil/:action", (req, res) => {
    let action = req.params.action;
    let input = req.body.until;

    if (action === "sum") {
        res.json({
            "result": sumOf(input)
          });
    } else if (action === "factor") {
        res.json({
            "result": factorOf(input)
          });
    }

    function factorOf(num) {
        let result = 1;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
        return result;
    }

    function sumOf(num) {
        let result = 0;
        for (let i = 1; i <= num; i++) {
            result += i;
            console.log(result);
          }
        return result;

    }
})
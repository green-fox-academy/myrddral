'use strict';

const reporter = document.getElementById('reporter');
// const jsonContent = fs.readFileSync("data.json", "utf-8");
// const database = JSON.parse(jsonContent);

const option = document.createElement('option');
reporter.appendChild(option);
option.setAttribute("value", "1");
option.innerText = "name";
'use strict';

const reporter = document.getElementById('reporter');

fetch('http://127.0.0.1:3000/users')
  .then(response => response.json())
  .then(data => console.log(data));

const option = document.createElement('option');
reporter.appendChild(option);
option.setAttribute("value", "1");
option.innerText = "name";
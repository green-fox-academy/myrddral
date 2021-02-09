"use strict";

const input = document.getElementById("input");
const queryBox = document.getElementById("query-box");
const button = document.getElementById("search-btn");

button.addEventListener("click", search);

function search() {
  const httpRequest = new XMLHttpRequest();
  // httpRequest.onreadystatechange = console.log;
  httpRequest.open(
    "GET",
    `https://swapi.dev/api/people/?search=${input.value}`,
    true
  );
  httpRequest.onload = function () {
    const response = JSON.parse(this.response);
    const nameContainer = document.createElement("div");

    nameContainer.innerHTML = response.results[0].name;
    queryBox.appendChild(nameContainer);

    nameContainer.addEventListener("click", listFilms);

    function listFilms() {
      let films = response.results[0].films;
      //   console.log(`${films[0]}`);
      for (let i = 0; i < films.length; i++) {
        const httpRequest = new XMLHttpRequest();
        httpRequest.open("GET", `${films[i]}`, true);
        httpRequest.onload = function () {
          const response = JSON.parse(this.response);
          const filmContainer = document.createElement("div");
          filmContainer.innerHTML = response.results[0].title;
          queryBox.appendChild(filmContainer);
          httpRequest.send(null);
        };
      }
    }
  };
  httpRequest.send(null);
}

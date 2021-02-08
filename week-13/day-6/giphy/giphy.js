"use strict";

const button = document.getElementById("searchBtn");
const input = document.getElementById("input");
button.addEventListener("click", search);

function search() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "GET",
    `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=xM86VSEX3dygGWMhlXtntXi3OGoA6vuZ`,
    true
  );
//   httpRequest.setRequestHeader(
//     "Authorization",
//     "xM86VSEX3dygGWMhlXtntXi3OGoA6vuZ"
//   );
  httpRequest.send(null);

  httpRequest.onload = function () {
    const response = JSON.parse(this.response);
  };
}

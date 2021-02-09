"use strict";

const contentBox = document.getElementById("content-box");
const button = document.getElementById("searchBtn");
const input = document.getElementById("input");
button.addEventListener("click", search);
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("searchBtn").click();
  }
});

function search() {
  const httpRequest = new XMLHttpRequest();
  httpRequest.open(
    "GET",
    `http://api.giphy.com/v1/gifs/search?q=${input.value}&api_key=xM86VSEX3dygGWMhlXtntXi3OGoA6vuZ`,
    true
  );
  httpRequest.send(null);

  httpRequest.onload = function () {
    const response = JSON.parse(this.response);
    for (let i = 0; i < 16; i++) {
      insertThumbnail(
        response.data[i].images.downsized_still,
        response.data[i].images.original.url
      );
    }

    function insertThumbnail(thumbnail, original) {
      const wrapper = document.createElement("a");
      wrapper.setAttribute("href", original);

      const newThumbnail = document.createElement("IMG");
      newThumbnail.setAttribute("src", `${thumbnail.url}`);
      newThumbnail.setAttribute("width", "20%");
      newThumbnail.setAttribute("height", "auto");

      wrapper.appendChild(newThumbnail)
      contentBox.appendChild(wrapper);
    }
  };
}

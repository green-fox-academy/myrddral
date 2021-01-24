"use strict";

const upBtn = document.getElementById("upbtn");
const rightBtn = document.getElementById("rightbtn");
const delBtn = document.getElementById("delbtn");
const downBtn = document.getElementById("downbtn");
const leftOptions = document.getElementById("leftOptions");
const rightOptions = document.getElementById("rightOptions");

upBtn.onclick = function () {
  leftOptions.selectedIndex--;
};
rightBtn.onclick = function () {
  let lastIndex = rightOptions.options.length;
  rightOptions.options[lastIndex] = leftOptions.selectedOptions[0];
  rightOptions.selectedOptions[0].selected = false;
  document.querySelector("option").selected = true;
};
delBtn.onclick = function () {
  leftOptions.selectedOptions[0].remove();
  document.querySelector("option").selected = true;
};
downBtn.onclick = function () {
  leftOptions.selectedIndex++;
};
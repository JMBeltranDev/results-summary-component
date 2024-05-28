"use strict";

let containerItems = document.querySelector(".container-items");

const getData = async function () {
  let response = await fetch("./data.json");
  let data = await response.json();
  data.forEach((element, index) => {
    containerItems.innerHTML += `
  <div class="summary-item item-color--${index + 1}">
    <div class="item-box">
      <img src="${element.icon}" alt="icon" class="summary-item-icon">
      <h3 class="summary-item-title">${element.category}</h3>
    </div>
    <p class="summary-score"><span>${element.score}</span> / 100</p>
  </div>`;
  });
};
getData();

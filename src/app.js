/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  function generateCard() {}
  const suits = ["♠", "♣", "♥", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  // Escolhe um naipe e um valor aleatório
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = values[Math.floor(Math.random() * values.length)];

  // Atualiza os elementos da carta
  document.getElementById("topSuit").textContent = randomSuit;
  document.getElementById("value").textContent = randomValue;
  document.getElementById("bottomSuit").textContent = randomSuit;

  // Adiciona a cor vermelha para naipes de coração e diamante
  const card = document.getElementById("card");
  if (randomSuit === "♥" || randomSuit === "♦") {
    card.classList.add("red");
  } else {
    card.classList.remove("red");
  }
};

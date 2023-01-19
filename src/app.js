import "bootstrap";
import "./style.css";

let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
let icons = ["♦", "♥", "♠", "♣"];

function randomcard(numbers, icons) {
  let icon1Random = document.getElementById("icon1").innerHTML;
  let numberRandom = document.getElementById("number").innerHTML;
  let icon2Random = document.getElementById("icon2").innerHTML;

  let numbersRandom = Math.floor(Math.random() * numbers.length);
  let iconsRandom = Math.floor(Math.random() * icons.length);

  document.getElementById("icon1").innerHTML = icons[iconsRandom];
  document.getElementById("number").innerHTML = numbers[numbersRandom];
  document.getElementById("icon2").innerHTML = icons[iconsRandom];

  if (iconsRandom == 0 || iconsRandom == 1) {
    document.getElementById("icon1").style.color = "red";
    document.getElementById("icon2").style.color = "red";
    document.getElementById("number").style.color = "red";
  } else {
    document.getElementById("icon1").style.color = "black";
    document.getElementById("icon2").style.color = "black";
    document.getElementById("number").style.color = "black";
  }
}

window.onload = function() {
  let numerosaleatorios = Math.random();
  randomcard(numbers, icons);
};

document.querySelector("#boton").addEventListener("click", () => {
  let numerosaleatorios = Math.random();
  randomcard(numbers, icons);
});

let reload = setInterval(randomcard, 10000, numbers, icons);

function width() {
  let width = document.querySelector("#width").value;
  let card = document.querySelector("#card");
  card.style.width = width + "px";
}
document.querySelector("#width").addEventListener("change", width);

function height() {
  let height = document.querySelector("#height").value;
  let card = document.querySelector("#card");
  card.style.height = height + "px";
}
document.querySelector("#height").addEventListener("change", height);

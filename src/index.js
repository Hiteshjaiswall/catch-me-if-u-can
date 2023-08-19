import "./styles.css";
var box = document.getElementById("box");

document.addEventListener("mouseover", catchme);

function catchme(event) {
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  var x = randomIntFromInterval(1, 80);
  var y = randomIntFromInterval(1, 80);
  box.style.left = x + "vw";
  box.style.top = y + "vh";
}

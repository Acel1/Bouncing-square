const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let btn = document.getElementById("btn-play");

canvas.width = 600;
canvas.height = 600;

let x = Math.random() * 550;
let y = Math.random() * 550;
function object() {
  return new context.fillRect(x, y, 50, 50);
}
btn.addEventListener("click", () => {
  object();
});

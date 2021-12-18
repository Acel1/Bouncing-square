const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

let btn = document.getElementById("btn-play");

canvas.width = 800;
canvas.height = 600;

btn.addEventListener("click", () => {
  let x = Math.random() * 750;
  let y = Math.random() * 550;
  let vx = 1;
  let vy = 1;
  function anim() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    requestAnimationFrame(anim);
    context.fillRect(x, y, 50, 50);

    if (x + 50 > canvas.width || x < 0) {
      vx = -vx;
    }
    if (y + 50 > canvas.height || y < 0) {
      vy = -vy;
    }
    x += vx;
    y += vy;
  }
  anim();
});

const btnPlay = document.getElementById("btn-play")
const btnClear = document.getElementById("btn-clear")

let interval
let isResume = false

btnPlay.addEventListener("click", () => {
  if (!isResume) {
    isResume = true
    start()
  } else {
    null
  }
})

btnClear.addEventListener("click", () => {
  stop()
  isResume = false
})

function start() {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")

  let player = {
    x: Math.abs(Math.floor(Math.random() * canvas.width) - 100),
    y: Math.abs(Math.floor(Math.random() * canvas.height) - 100),
    speed: 2,
  }
  let RIGHT = false
  let LEFT = false

  document.onkeydown = function (e) {
    if (e.key == "ArrowRight") {
      RIGHT = true
    }
    if (e.key == "ArrowLeft") {
      LEFT = true
    }
  }

  document.onkeyup = function (e) {
    if (e.key == "ArrowRight") {
      RIGHT = false
    }
    if (e.key == "ArrowLeft") {
      LEFT = false
    }
  }
  function move() {
    if (RIGHT) {
      player.x += player.speed
    }
    if (LEFT) {
      player.x -= player.speed
    }
  }

  function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
  }

  function ship() {
    let xShip = player.x
    let yShip = player.y
    ctx.fillStyle = "red"

    ctx.beginPath()
    ctx.rect(xShip, yShip, 100, 100)
    ctx.fill()
  }

  function update() {
    clear()
    ship()
    move()
  }
  return (interval = setInterval(update, 10))
}

function stop() {
  const canvas = document.getElementById("canvas")
  const ctx = canvas.getContext("2d")
  clearInterval(interval)
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

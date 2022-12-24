const days = document.querySelectorAll(".days")
const hours = document.querySelectorAll(".hours")
const minutes = document.querySelectorAll(".minutes")
const seconds = document.querySelectorAll(".seconds")
const currentYear = new Date().getFullYear()

function updateElement(elements, value) {
  elements.forEach(element => {
    element.innerHTML = value < 10 ? "0" + value : value
  })
}

function updateCountdownTime() {
  const currentTime = new Date()
  const newYearTime = new Date(`January 1 ${currentYear + 1} 00:00:00`)
  const diff = newYearTime - currentTime

  const d = Math.floor(diff / 1000 / 60 / 60 /24)
  const h = Math.floor(diff / 1000 / 60 / 60) % 24
  const m = Math.floor(diff / 1000 / 60) % 60
  const s = Math.floor(diff / 1000) % 60

  updateElement(days, d)
  updateElement(hours, h)
  updateElement(minutes, m)
  updateElement(seconds, s)
}

setInterval(updateCountdownTime, 1000)

const imageSources = {
  fb: {
    hover: "images/icon-facebook - Copy.svg",
    default: "images/icon-facebook.svg"
  },
  ptr: {
    hover: "images/icon-pinterest - Copy.svg",
    default: "images/icon-pinterest.svg"
  },
  ig: {
    hover: "images/icon-instagram - Copy.svg",
    default: "images/icon-instagram.svg"
  }
};

function hoverImage(img, type) {
  img.src = imageSources[type].hover
}

function hoverOutImage(img, type) {
  img.src = imageSources[type].default
}

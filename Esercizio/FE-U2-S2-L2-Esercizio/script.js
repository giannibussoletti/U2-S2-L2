const welcomeSummer = document.querySelectorAll(".hot")

const hotBadge = () => {
  for (let i = 0; i < welcomeSummer.length; i++) {
    welcomeSummer[i].innerHTML +=
      `<span class="badge position-absolute top-0 end-0 m-2 rounded bg-danger">HOT</span>`
  }
}

hotBadge()

const cardBoom = document.querySelectorAll(".card")
const cardExplosion = () => {
  console.log(cardBoom)
  for (let i = 0; i < cardBoom.length; i++) {
    cardBoom[i].setAttribute("style", "display: none;")
  }
}

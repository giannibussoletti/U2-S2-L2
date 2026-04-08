const welcomeSummer = document.querySelectorAll("#welcome-summer .card")

const hotBadge = () => {
  welcomeSummer.forEach(function (card) {
    const span = document.createElement("span")
    span.classList.add(
      "badge",
      "position-absolute",
      "top-0",
      "end-0",
      "m-2",
      "rounded",
      "bg-danger",
    )
    span.innerText = "HOT"
    card.appendChild(span)
  })
  //   for (let i = 0; i < welcomeSummer.length; i++) {
  //     welcomeSummer[i].innerHTML +=
  //       `<span class="badge position-absolute top-0 end-0 m-2 rounded bg-danger">HOT</span>`
  //   }
}

hotBadge()

const cardBoom = document.querySelectorAll(".card")

const cardExplosion = () => {
  cardBoom.forEach(function (card) {
    card.classList.toggle("opacity-0")
  })
  //   console.log(cardBoom)
  //   for (let i = 0; i < cardBoom.length; i++) {
  //     cardBoom[i].setAttribute("style", "display: none;")
  //   }
}

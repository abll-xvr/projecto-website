function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar2-light.png")
    img.setAttribute(
      "alt",
      "Foto do Abel Xavier, com uma camisa cor de vinho, tirada num espelho, de meio corpo"
    )
  } else {
    //se tiver em dark mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar2.png")
    img.setAttribute("alt", "Foto do Abel Xavier, a sorrir, com capuz")
  }
}

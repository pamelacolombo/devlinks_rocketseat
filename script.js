function toggleMode() {
  const html = document.documentElement

  //if (html.classList.contains("light")) {
  // html.classList.remove("light")
  //} else {
  //  html.classList.add("light")
  // }

  html.classList.toggle("light")

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light

    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.png")
  }

  // substituir a imagem
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a imagem light

    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, barba feita, usando óculos de sol, camisa e jaqueta preta e com fundo azul"
    )
  } else {
    // se tiver sem light mode, manter a imagem normal
    img.setAttribute(
      "alt",
      "Foto de Mayk Brito sorrindo, de barba, usando óculos e camisa preta e com fundo amarelo"
    )
  }
}

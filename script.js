function togglemode() { 
const html = document.documentElement


html.classList.toggle("light")
// pegar a tag img
const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains("light")) {
  // se tiver light mode 
img.setAttribute("src", "./assets/avatar-light.png")
} else {
// se não tiver light mode
img.setAttribute("src", "./assets/avatar Pedro.png")
}
}


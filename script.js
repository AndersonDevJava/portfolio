
const menuBtn = document.querySelector(".menu-toggle")
const menumobile = document.querySelector(".ancoras")

menuBtn.addEventListener("click", () => {
  menumobile.classList.toggle("active")
})
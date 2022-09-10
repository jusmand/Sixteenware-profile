const navbar = document.getElementsByTagName("nav")[0]

window.addEventListener("scroll", function () {
    if (this.window.scrollY > 1) {
        navbar.classList.replace("bg-transparent", "bg-primary")
    } else if (this.window.scrollY <= 0) {
        navbar.classList.replace("bg-primary", "bg-transparent")
    }
})

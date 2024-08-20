const mobile_menu = document.getElementById("mobileMenu")

mobile_menu.addEventListener("click", addClass)

function addClass(menu){
    const navbar_menu = document.getElementById("navbarMenu")
    navbar_menu.classList.toggle("active")
    console.log(navbar_menu)
}
let navButton = document.querySelector("#nav-button")

function hideMenu(){
    let navItems = document.querySelector("#nav-items")
    if(navItems.classList.contains("hidden")){
        navItems.classList.remove("hidden")
    } else {
        navItems.classList.add("hidden")
    }
}

navButton.addEventListener("click", hideMenu)

// Mobile Menu 
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


// Log add to cart, and change button text to added for 1sec
let addToCart = document.querySelector("#add-to-cart")
addToCart.addEventListener("submit",(e) => {
    e.preventDefault()

    let shoeValue = document.querySelector("#size-shoe").value
    let submit = document.querySelector("#submit")
    submit.innerText = "Added"
    setTimeout(() => submit.innerText ="Purchase",1000)
    console.log(shoeValue)
})



// Change Large photo if thumbnail clicked
let thumbnails = document.querySelectorAll("#thumbnails")
for(thumbnail of thumbnails){
    thumbnail.addEventListener( "click", function(e){
        let photo = document.querySelector("#photo")
        // Can use either this or e.target to get info
        console.log(e.target.src)
        photo.src = this.src
    })
}
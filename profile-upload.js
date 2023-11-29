
const subMenu = document.querySelector(".sub-menu")
const driver = document.querySelector(".dropdown");


driver.addEventListener("mouseover",  ()=>{
    subMenu.classList.add("add")
})

driver.addEventListener("click",  ()=>{
    subMenu.classList.toggle("add")
})


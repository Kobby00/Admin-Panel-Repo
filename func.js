
const toggle = document.querySelectorAll("#toggle");

toggle.forEach(button => {
    button.addEventListener('click' , () => {
        button.classList.toggle("active");
    })
})

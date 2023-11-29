const chart = document.querySelector("#chart").getContext('2d');



new Chart(chart,{
    type: 'line',
    data: {
        labels:['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],

        datasets: [{
            label: 'Completed Rides',
            data: [29374,33537, 49631, 59095,5792,36684,3357,48847,48116,61004],
            borderColor: 'Blue',
            borderWidth: 2
        },
        {
            label: 'Canceled Rides',
            data: [31500,41000, 88800, 2600,46000,32698,5000,3000,18656,61004,24832,61004],
            borderColor: 'Red',
            borderWidth: 2
        },
    ]
    },
    options:{
        resposive: true
    }
})

//Show or hide side bar

const menuBtn = document.querySelector('.menu-btn')
const closeBtn = document.querySelector("#close-btn");
const sideBar = document.querySelector("aside");



let open = () =>{
    sideBar.style.display = 'block'
}

let close = () =>{
    sideBar.style.display = 'none'
}

closeBtn.addEventListener('click', close)
menuBtn.addEventListener("click", open)

//change theme 
const themeBtn = document.querySelector('.theme-btn')
console.log(themeBtn)

themeBtn.addEventListener('click' , ()=>{
    document.body.classList.toggle('dark-theme')  
})

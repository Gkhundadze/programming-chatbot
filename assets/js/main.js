const communication_container = document.querySelector('.communication_container');

let data = [
    {
        img: 'assets/images/communication/communicationImg1.png',
        title: 'ვებ პროგრამირება',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',
        className: 'img-1',
    },
    {
        img: 'assets/images/communication/communicationImg2.png',
        title: 'ციფრული კომუნიკაციები',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',
        className: 'img-2',
    },
    {
        img: 'assets/images/communication/communicationImg3.png',
        title: 'გრაფიკული დიზაინი',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',
        className: 'img-3',
    },
]

let container = '';
data.forEach((item) => {
    const { img, title, text, className } = item;
    container += 
        `<div class='communication_item'>
            <div class='communication_img ${className}'>
                <img src=${img} alt='communicationImg'>
            </div>
            <div>
                <h3>${title}</h3>
                <p>${text}</p>
            </div>
        </div>`
})

communication_container.innerHTML = container;

let openNavbar = document.querySelector('.navbar');
let nav_ul = document.querySelector('.nav_ul');
let nav = document.querySelector('.nav');
let header =document.querySelector('.header');

openNavbar.addEventListener('click', function() {
    nav.clientHeight == 0 ? nav.style.height = `${nav_ul.clientHeight}px` : nav.style.height = 0;
    openNavbar.classList.toggle('active');

})

let bar = document.querySelector('.bar')
window.addEventListener('click', function(e) {
    let className = e.target.className;
    if(className != 'nav' && className != 'header' && className != 'nav_ul' && className !='bar' && className != bar.closest('.navbar').className){
        nav.style.height = 0
        openNavbar.classList.remove('active');
    }
})


let links = document.querySelectorAll('.link');
links.forEach((link) => {
    link.addEventListener('click', function(){
        openNavbar.classList.remove('active')
        nav.style.height = 0;
    })
})
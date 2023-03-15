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
                <img src=${img} alt='img'>
            </div>
            <div>
                <h3>${title}</h3>
                <p>${text}</p>
            </div>
        </div>`
})

communication_container.innerHTML = container;

let openNavbar = document.querySelector('.openNavbar');
let nav_ul = document.querySelector('.nav_ul');
let nav = document.querySelector('.nav');

openNavbar.addEventListener('click', function() {
    nav.clientHeight == 0 ? nav.style.height = `${nav_ul.clientHeight}px` : nav.style.height = 0;
})

let links = document.querySelectorAll('.link');
links.forEach((link) => {
    link.addEventListener('click', function(){
        nav.style.height = 0;
    })
})
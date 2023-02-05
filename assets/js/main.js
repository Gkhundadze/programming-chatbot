const creators_container = document.querySelector('.creators_container');

let data = [
    {
        img: '/assets/images/creators/creatorsImg1.png',
        title: 'ვებ პროგრამირება',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',

    },
    {
        img: '/assets/images/creators/creatorsImg2.png',
        title: 'ციფრული კომუნიკაციები',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',

    },
    {
        img: '/assets/images/creators/creatorsImg1.png',
        title: 'გრაფიკული დიზაინი',
        text: 'მე შემიძლია შენთან ერთად აღმოვაჩნო სიახლეები და მოგაწოდო ბევრი ახალი ინფორმაცია',

    },
]

let container = '';
data.forEach((item) => {
    const { img, title, text } = item;
    container += "<div class='creators_item'><div class='creators_img'><img src="+img+" alt='img'></div><div><h3>"+title+"</h3><p>"+text+"</p></div></div><img class='figure4' src='/assets/images/figure.png' alt='img'>";
})

creators_container.innerHTML = container;

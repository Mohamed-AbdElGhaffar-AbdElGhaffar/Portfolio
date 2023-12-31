let nav = document.querySelector('nav');
let footer = document.querySelector('footer');
let icons = document.querySelector('.icons');
let moon = document.querySelector('.moon');
let sun = document.querySelector('.sun');
let color = document.querySelectorAll('.color');

// WoW JS
new WOW().init();

// Navbar
icons.addEventListener('click', function (e) {
    moon.classList.toggle('translate1')
    sun.classList.toggle('translate2')

    nav.classList.toggle('box')
    footer.classList.toggle('box')

    color.forEach((element) => {
        element.classList.toggle('bg-dark');
        element.classList.toggle('text-whiet');
    })
    
    document.querySelector('.cv').classList.toggle('bg-whiet')
    document.querySelector('.cv a').classList.toggle('text-dark')
    
    document.querySelectorAll('.background').forEach((section) => {
        section.classList.toggle('bg-dark')
    })
})

// Skills
let mySkills = [
    { icon: '<i class="fa-brands fa-html5 fa-bounce fa-2x ms-2 me-3 html"></i>', name: 'HTML' },
    { icon: '<i class="fa-brands fa-css3-alt fa-beat fa-2x ms-2 me-3 CSS"></i>', name: 'CSS' },
    { icon: '<i class="fa-brands fa-square-js fa-flip fa-2x ms-2 me-3 JS"></i>', name: 'JAVASCRIPT' },
    { icon: '<i class="fa-brands fa-bootstrap fa-spin fa-2x ms-2 me-3 Boot"></i>', name: 'BOOTSTRAP' },
    { icon: '<i class="bx bxl-jquery bx-burst fa-2x ms-2 me-3 JQUERY"></i>', name: 'JQUERY' },
    { icon: '<i class="fa-brands fa-sass fa-shake fa-2x ms-2 me-3 SASS"></i>', name: 'SASS' },
    { icon: '<i class="bx bxl-typescript bx-fade-down fa-2x ms-2 me-3 TYPESCRIPT"></i>', name: 'TYPESCRIPT' },
    { icon: '<i class="bx bxs-file-json bx-tada fa-2x ms-2 me-3 JSON" ></i>', name: 'JSON & AJAX & AXIOS' },
    { icon: '<img src="imgs/github.gif" alt="React" class="fa-2x ms-2 me-3 GITHUB">', name: 'GIT & GITHUB' },
    { icon: '<img src="imgs/React.gif" alt="React" class="fa-2x ms-2 me-3 REACT">', name: 'REACT JS' },
    { icon: '<span class="Next fa-2x ms-2 me-3">NE</span>', name: 'NEXT JS' }
]
let box = '';
for (let i = 0; i < mySkills.length; i++) {
    box += `
    <div class="col-lg-4 col-sm-6">
    <div class="item position-relative overflow-hidden">
        ${mySkills[i].icon}
        <span>${mySkills[i].name}</span>
    </div>
    </div>
`
}
document.querySelector('.skill').innerHTML = box;

// Projects
let projects = [
    {
        name: 'E-commerce Website',
        image: 'imgs/FreshCart.png',
        githPage: 'https://e-commerce-website-livid.vercel.app/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/E-commerce-website.git',
        skills: ['React', 'Context', 'Fontawesome', 'HTML', 'CSS', 'JavaScript', 'Bootstrap','JSON & AJAX & AXIOS','React-Query','Formik','Yup']
    },
    {
        name: 'Game REVIEWS',
        image: 'imgs/Game.png',
        githPage: 'https://game-reviews-website.vercel.app/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Game-Website.git',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap','React', 'Context','JSON & AJAX & AXIOS','React-Query']
    },
    {
        name: 'Notes',
        image: 'imgs/notes.png',
        githPage: 'https://notes-app-one-puce.vercel.app/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Notes-App.git',
        skills: ['React', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Fontawesome','JSON & AJAX & AXIOS','Formik','Yup']
    },
    {
        name: 'Yummy',
        image: 'imgs/yummy-logo.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Yummy-website/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Yummy-website.git',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Fontawesome','Fetch','JSON & AJAX & AXIOS','Async','await','jQuery']
    },
    {
        name: 'Egyptian-party',
        image: 'imgs/Egyptian-party.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Egyptian-party-jQuery/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Egyptian-party-jQuery.git',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Fontawesome','jQuery']
    },
    {
        name: 'Weather',
        image: 'imgs/Weather.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Weather-website/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Weather-website.git',
        skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Fontawesome','Fetch','JSON & AJAX & AXIOS','Async','await']
    },
    {
        name: 'Bootstrab Portfolio',
        image: 'imgs/Daniels.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Bootstrap-Website/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Bootstrap-Website.git',
        skills: ['HTML', 'CSS', 'Bootstrap', 'Fontawesome']
    },
    {
        name: 'DevFolio',
        image: 'imgs/DevFolio.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/DevFolio-Website/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/DevFolio-Website.git',
        skills: ['HTML', 'CSS', 'Bootstrap', 'Fontawesome']
    },
    {
        name: 'Mealify',
        image: 'imgs/Mealify.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/Mealify-Website/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/Mealify-Website.git',
        skills: ['HTML', 'CSS', 'Fontawesome']
    },
    {
        name: 'Fokir',
        image: 'imgs/Fokir.png',
        githPage: 'https://mohamed-abdelghaffar-abdelghaffar.github.io/fokir/',
        code: 'https://github.com/Mohamed-AbdElGhaffar-AbdElGhaffar/fokir.git',
        skills: ['HTML', 'CSS', 'Fontawesome']
    },
    
];
let myProjects = '';
for (let i = 0; i < projects.length; i++) {
    myProjects += `
    <div class="col-lg-4 col-md-6">
    <div class="item">
        <div class="inner-box">
            <img src="${projects[i].image}" class="w-100" alt="${projects[i].name}">
            <div class="layer">
                <div class="w-75">
                    <ul class="list-unstyled d-flex justify-content-center mb-1">
                        <li><a href="${projects[i].githPage}" target="_blank"><i class="fa-brands fa-github"></i></a></li>
                        <li><a href="${projects[i].code}" target="_blank"><i class="fa-solid fa-code"></i></a></li>
                    </ul>
                    <h5 class="fw-bold text-nowrap">${projects[i].name}</h5>
                    <ul class="list-unstyled d-flex flex-wrap skills justify-content-center">
                    ${projects[i].skills.map((skill) => { return `<li>${skill}</li>` })}
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
    `;
}
document.getElementById('project').innerHTML = myProjects;

AOS.init();
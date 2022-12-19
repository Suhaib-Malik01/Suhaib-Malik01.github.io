let showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
        toggle.addEventListener('click',()=>{
            nav.classList.toggle('hide')
        })
    }
    
}
showMenu('nav-toggle', 'nav-menu')

const navlink = document.querySelectorAll('.nav-link')


function linkAction(){
    navlink.forEach(n=> n.classList.remove('active'))
    this.classList.add('active')

    let navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show')
}

navlink.forEach(n => n.addEventListener('click',linkAction))

window.onload = function () {
    GitHubCalendar(".calendar", "Suhaib-Malik01");
    GitHubCalendar(".calendar", "Suhaib-Malik01", { responsive: true });
}




const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

//--Home Animation
sr.reveal('.home__title',{})
sr.reveal('#Links',{delay:200})
sr.reveal('#Photo',{delay:300})


// -- About Animation
sr.reveal('.About__Photo',{})
sr.reveal('.About__Name',{delay:200})
sr.reveal('.About__Name+p',{delay:400})

// ---Skills Animation
sr.reveal('.Skill-div',{})
sr.reveal('.Skill__Animation',{delay:200})
sr.reveal('.Skill-div-2',{delay:400});
sr.reveal('.Skill-bullet-point',{delay:600})

// --Project Animation

sr.reveal('.fiverr',{})
sr.reveal('.Animoto',{delay:200})
sr.reveal('.Weather',{delay:400})


// --Github Animation
sr.reveal('.calendar',{})
sr.reveal('.stats-1',{delay:200})
sr.reveal('.stats-2',{delay:400})



// --Contact Animation
sr.reveal('.in-name',{})
sr.reveal('.in-email',{delay:200})
sr.reveal('.contact__input',{delay:400})
sr.reveal('.Contact-button',{delay:500})
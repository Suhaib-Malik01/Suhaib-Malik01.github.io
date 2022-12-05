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

let data = [
    {
        "name": "Java",
        "icon": "https://img.icons8.com/color/48/000000/java-coffee-cup-logo--v1.png"
    },
    {
        "name": "MySQL",
        "icon": "https://img.icons8.com/color/48/000000/mysql-logo.png"
    },
    {
        "name": "Spring",
        "icon": "https://img.icons8.com/color/48/000000/spring-logo.png"
    },
    {
        "name": "HTML",
        "icon": "https://img.icons8.com/color/48/000000/html-5--v1.png"
    },
    {
        "name": "CSS3",
        "icon": "https://img.icons8.com/color/48/000000/css3.png"
    },
    {
        "name": "JavaScript",
        "icon": "https://img.icons8.com/color/48/000000/javascript--v1.png"
    },

    {
        "name": "GitHub",
        "icon": "https://img.icons8.com/glyph-neue/48/github.png"
    },
    {
        "name":"Hibernate",
        "icon": "https://seeklogo.com/images/H/hibernate-logo-8C95C75A24-seeklogo.com.png"
    }
    ,
    {
        "name": "Maven",
        "icon": "https://editorconfig.org/logos/maven.png"
    }

    
]


let container = document.getElementById("Skills");


display(data);
let count = 0;
function display(arr){
    container.innerHTML = "";
    for(let i=0;i<=6;i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        div.setAttribute("Class",'Skill-div')
        img.src = arr[i].icon;
        let name = document.createElement("h5");
        name.innerText = arr[i].name;
        div.append(img,name);
        container.append(div);
    };
    for(let i=7;i<arr.length;i++){
        let div = document.createElement("div");
        let img = document.createElement("img");
        div.setAttribute("Class",'Skill-div-2')
        img.src = arr[i].icon;
        let name = document.createElement("h5");
        name.innerText = arr[i].name;
        div.append(img,name);
        container.append(div);
    }
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
sr.reveal('.Skill-div-2',{delay:200});

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
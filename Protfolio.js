let showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')


window.onload = function () {
    GitHubCalendar(".calendar", "Suhaib-Malik01");
    // or enable responsive functionality:
    GitHubCalendar(".calendar", "Suhaib-Malik01", { responsive: true });

}

let arr = [
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
    }
]


let container = document.getElementById("Skills");


display(arr);
function display(arr){
    container.innerHTML = "";
    arr.forEach(ele => {
        let div = document.createElement("div");
        let img = document.createElement("img");
        img.src = ele.icon;
        let name = document.createElement("h5");
        name.innerText = ele.name;
        div.append(img,name);
        container.append(div);
    });
}
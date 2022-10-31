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



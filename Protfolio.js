let showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
    toggle.addEventListener("click", () => {
      nav.classList.toggle("hide");
    });
  }
};
showMenu("nav-toggle", "nav");

const navlink = document.querySelectorAll(".nav-link");

function linkAction() {
  navlink.forEach((n) => n.classList.remove("active"));
  this.classList.add("active");

  let navMenu = document.getElementById("nav");

  navMenu.classList.remove("show");
}

navlink.forEach((n) => n.addEventListener("click", linkAction));

window.onload = function () {
  GitHubCalendar(".calendar", "Suhaib-Malik01");
  GitHubCalendar(".calendar", "Suhaib-Malik01", {
    responsive: true,
    global_stats: false,
  });
};

function sendEmail() {
  let name = document.getElementById("name");
  let from = document.getElementById("email");
  let desc = document.getElementById("description");

  let ebody = `
    ${desc.value}
    <br>
    <br>
    <h4>First Name: </h4>${name.value}
    <br>
    <h4>Email: </h4>${from.value}
    `;
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "Suhaibmalik6397@gmail.com",
    Password: "71426DB3AEE716C62F0329DFB5DCDDFA5766",
    To: "suhaib.malik9691@gmail.com",
    From: "suhaibmalik6397@gmail.com",
    Subject: "From Your Portfolio...",
    Body: ebody,
  }).then((message) => {
    if (message == "OK") {
      alert("Message send Successfully");
    } else {
      alert(message);
    }
  });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "70px",
  duration: 1500,
  reset: false,
});

//--Home Animation
sr.reveal(".home__title", {});
sr.reveal("#Links", { delay: 200 });
sr.reveal("#Photo", { delay: 300 });

// -- About Animation
sr.reveal(".About__Photo", {});
sr.reveal(".About__Name", { delay: 200 });
sr.reveal(".About__Name+p", { delay: 400 });

// ---Skills Animation
sr.reveal(".Skill-div", {});
sr.reveal(".Skill__Animation", { delay: 200 });
sr.reveal(".Skill-div-2", { delay: 400 });
sr.reveal(".Skill-bullet-point", { delay: 600 });

// --Project Animation

sr.reveal(".fiverr", {});
sr.reveal(".Animoto", { delay: 200 });
sr.reveal(".Weather", { delay: 400 });

// --Github Animation
sr.reveal(".calendar", {});
sr.reveal(".stats-1", { delay: 200 });
sr.reveal(".stats-2", { delay: 400 });

// --Contact Animation
sr.reveal("#name", {});
sr.reveal("#email", { delay: 200 });
sr.reveal("#description", { delay: 400 });
sr.reveal(".Contact-button", { delay: 500 });

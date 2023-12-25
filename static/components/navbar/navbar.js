const template = document.createElement("template");

const home_url=window.location.href
console.log(home_url);

template.innerHTML = `
<link rel="stylesheet" href="/static/components/navbar/navbar.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
<style>
 a{
    text-decoration: none;
 }
</style>

<nav class="main-nav d-flex justify-content-between align-items-center">
    <div class="right-side__nav d-flex align-items-center hidden">
        <a href=${home_url.split("/")[0]}//${
  home_url.split("/")[2]
} class="logo">
            <img class="img-fluid" src="/static/assets/images/logo 3.png" alt="Eco logo">
        </a>
        <div class="nav-links toggler">
            <a class=" dropdown-toggle btn-toggle">
              ECO
            </a>
            <ul class=" drop-content" >
              <li><a class="dropdown-item" href="accounts/user/problems">Echo Problem</a></li>
              <li><a class="dropdown-item" href="accounts/user/projects">Echo Project</a></li>
              <li><a class="dropdown-item" href="#">Need help?</a></li>
            </ul>
            <a href="#">PAls</a>
            <a href="#">iPals</a>
            <a href="#">Innovation</a>
        </div>
    </div>
    <div class="nav-profile  justify-content-around text-align-center align-items-center">
        <div class="d-flex user-contribution d-flex align-items-center">
        <p><a href="accounts/user/problems">Problems<span id="problemCount">24</span></a></p>
        <p><a href="accounts/user/projects">Projects<span id="projectCount">24</span></a></p>
        </div>
        <button class="user-profile-btn d-flex align-items-center">
          <div class="user-img">
            <img src="/static/assets/icons/avatar.png" class="img-fluid">
          </div>
          <div class="user-img">
            <img src="/static/assets/icons/arrow-down.png" class="img-fluid">
          </div>
        </button>

        <div class=" user-content" style="">
          <div class="profile-heading d-flex">
            <div class="user-img">
              <img src="/static/assets/icons/avatar.png" class="img-fluid">
            </div>
            <p class="ms-2 mt-1">Solomon Daniels</p>
          </div>
          <div class="profile-func">
            <a href=${home_url.split("/")[0]}//${
  home_url.split("/")[2]
}/accounts/user/profile>View Profile</a>
            <a href="">Settings & Privacy</a>
            <a href="">Help & Support</a>
            <a href="">Give Feedback</a>
            <a href=${home_url.split("/")[0]}//${
  home_url.split("/")[2]
}/accounts/logout>
Logout</a>
          </div>
        </div>

    </div>

    <div class="d-flex justify-content-between align-items-center">
      <button class="user-profile-btn user-profile-btn-sm user-sm d-flex align-items-center">
        <div class="user-img">
          <img src="/static/assets/icons/avatar.png" class="img-fluid">
        </div>
        <div class="user-img">
          <img src="/static/assets/icons/arrow-down.png" class="img-fluid">
        </div>
      </button>
      <div class="menu">
          <button><img src="/static/assets/icons/more.png" alt=""></button>
      </div>
      <div class=" user-content user-content-sm" style="">
          <div class="profile-heading d-flex">
            <div class="user-img">
              <img src="/static/assets/icons/avatar.png" class="img-fluid">
            </div>
            <p class="ms-2 mt-1">Solomon Daniels</p>
          </div>
          <div class="profile-func">
          <a href="accounts/login">View Profile</a>
            <a href="">Settings & Privacy</a>
            <a href="">Help & Support</a>
            <a href="">Give Feedback</a>
            <a href=${home_url.split("/")[0]}//${home_url.split("/")[2]}/accounts/logout>
            Logout</a>
          </div>
        </div>
    </div>

</nav>

<section class="nav-sm " data-visible="false">
        <div class="menu-sm">
            <button> <img src="/static/assets/icons/x-lg.svg" alt="close button" class="close-btn"></button>
        </div>
        <div class="d-flex flex-column align-items-center justify-content-center gap-3 mt-5">
            <div class="logo-sm">
                <img src="/static/assets/images/logo 3.png" alt="Eco logo" class="img-fluid">
            </div>

            <div class="nav-links drop-display toggler w-100">
                <div class="nav-links d-flex gap-2 flex-column align-items-center justify-content-center toggler">
                    <a class=" dropdown-toggle btn-toggle-sm">
                      ECO
                    </a>
                    <ul class=" drop-content-sm" >
                      <li><a class="dropdown-item" href="accounts/user/problems">Echo Problem</a></li>
                      <li><a class="dropdown-item" href="accounts/user/projects">Echo Project</a></li>
                      <li><a class="dropdown-item" href="#">Need help?</a></li>
                    </ul>
                    <a href="#">PAls</a>
                    <a href="#">iPals</a>
                    <a href="#">Innovation</a>
                </div>
            </div>
            <div class="d-flex user-contribution d-flex align-items-center">
            <p><a href="accounts/user/problems">Problems<span id="problemCount">24</span></a></p>
            <p><a href="accounts/user/projects">Projects<span id="projectCount">24</span></a></p>
          </div>
            <div class="connect w-50 toggler gap-2 skew d-flex flex-column align-items-center">
                <a href="form.html" id="login1" class="login-btn">Log In</a>
                <a href="form.html" id="create1" class="signup-btn">Create Account</a>
            </div>
        </div>

    </section>

`;

class navBar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    const dropBtn = this.shadowRoot.querySelector(".btn-toggle");
    const dropContent = this.shadowRoot.querySelector(".drop-content");
    dropBtn.addEventListener("click", () => {
      dropContent.classList.toggle("drop-display");
      console.log("clicked");
    });
    const smEcoBtn = this.shadowRoot.querySelector(".btn-toggle-sm");
    const smDropContent = this.shadowRoot.querySelector(".drop-content-sm");
    smEcoBtn.addEventListener("click", () => {
      smDropContent.classList.toggle("drop-display");
      console.log("clicked");
    });
    const userDrop = this.shadowRoot.querySelector(".user-profile-btn");
    const userContent = this.shadowRoot.querySelector(".user-content");
    userDrop.addEventListener("click", () => {
      userContent.classList.toggle("drop-display");
      console.log("clicked");
    });
    const smUserDrop = this.shadowRoot.querySelector(".user-profile-btn-sm");
    const smUserContent = this.shadowRoot.querySelector(".user-content-sm");
    smUserDrop.addEventListener("click", () => {
      console.log("clicked");
      smUserContent.classList.toggle("drop-display");
    });
    const smallNav = this.shadowRoot.querySelector(".nav-sm");
    const menuBtn = this.shadowRoot.querySelector(".menu");
    const smMenuBtn = this.shadowRoot.querySelector(".menu-sm");

    menuBtn.addEventListener("click", () => {
      const visibility = smallNav.getAttribute("data-visible");
      console.log(visibility);
      if (visibility === "false") {
        smallNav.setAttribute("data-visible", "true");
      }
    });
    smMenuBtn.addEventListener("click", () => {
      const visibility = smallNav.getAttribute("data-visible");
      console.log("small clicked");
      console.log(visibility);
      if (visibility === "true") {
        smallNav.setAttribute("data-visible", "false");
      }
    });

    /// Fetch problem count
    fetch('/get_problem_count/')
    .then(response => response.json())
    .then(data => {
        const problemCountSpan = this.shadowRoot.querySelector('#problemCount');
        const problemsLink = this.shadowRoot.querySelector('.user-contribution p:first-child a');

        problemCountSpan.textContent = data.problem_count;

        problemsLink.href = '/accounts/user/problems';
        problemsLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/accounts/user/problems';
        });
    });

// Fetch project count
  fetch('/get_project_count/')
    .then(response => response.json())
    .then(data => {
        const projectCountSpan = this.shadowRoot.querySelector('#projectCount');
        const projectsLink = this.shadowRoot.querySelector('.user-contribution p:last-child a');

        projectCountSpan.textContent = data.project_count;

        projectsLink.href = '/accounts/user/projects';
        projectsLink.addEventListener('click', (event) => {
            event.preventDefault();
            window.location.href = '/accounts/user/projects';
        });
    });

  }
}

export default navBar;

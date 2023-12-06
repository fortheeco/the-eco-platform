//registeration page
const loginBtn = document.querySelector("#loginBtn");
const signUpBtn = document.querySelector("#signUpBtn");
const loginPage = document.querySelector("#Login");
const signUpPage = document.querySelector("#Register");
const singleRegisterBtn = document.querySelector("#single-signup-btn");
const companyRegisterBtn = document.querySelector("#company-signup-btn");
const individualPage = document.querySelector("#individual");

const passWord = document.querySelector("#pwrdHASHED");

const passwordIconButtons = document.querySelectorAll(".password-icon");

// Loop through each password icon button
passwordIconButtons.forEach((button) => {
  // Find the associated password input field
  const passWord = button.previousElementSibling;
  const iconImage = button.querySelector(".icon-img");
  // Attach click event listener to the password icon button
  button.addEventListener("click", () => {
    if (passWord.type === "password") {
      passWord.type = "text";
      iconImage.setAttribute("src", "/static/assets/icons/eye-slash.svg");
    } else {
      passWord.type = "password";
      iconImage.setAttribute("src", "/static/assets/icons/eye.png");
    }
  });
});

loginBtn.addEventListener("click", () => {
  loginPage.classList.remove("d-none");
  loginPage.classList.add("d-show");
  signUpPage.classList.remove("d-show");
  signUpPage.classList.add("d-none");
  loginBtn.classList.add("active");
  signUpBtn.classList.remove("active");
  individualPage.classList.add("d-none");
  individualPage.classList.remove("d-show");
});
signUpBtn.addEventListener("click", () => {
  signUpPage.classList.remove("d-none");
  signUpPage.classList.add("d-show");
  loginPage.classList.remove("d-show");
  loginPage.classList.add("d-none");
  loginBtn.classList.remove("active");
  signUpBtn.classList.add("active");
});
singleRegisterBtn.addEventListener("click", () => {
  signUpPage.classList.add("d-none");
  signUpPage.classList.remove("d-show");
  individualPage.classList.remove("d-none");
  individualPage.classList.add("d-show");
});

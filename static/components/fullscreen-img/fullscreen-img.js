// Toggle selected image fullscreen
function displayFullscreenImg(src, alt) {
  const template = document.querySelector(".featured__item--template");
  const featuredImgWrapper = template.content.cloneNode(true);
  // featuredImg.childNodes[0].nextSibling.firstChild.nextSibling.src = src
  const featuredImg = featuredImgWrapper.querySelector("img");
  // add new image src + alt to template
  featuredImg.src = src;
  featuredImg.setAttribute("alt", alt);

  // append template to DOM (below main page content)
  document.querySelector("body").appendChild(featuredImgWrapper);
}

const allMainImages = document.querySelectorAll(".fullscreen-img");

allMainImages.forEach((img) => {
  img.addEventListener("click", (e) => {
    const imgSrc = e.target.src;
    const imgAlt = e.target.getAttribute("alt");

    displayFullscreenImg(imgSrc, imgAlt);
  });
});

// hide the fullscreen image when user clicks on the container
// added the listener to the document to persist the listener throughout the document
document.addEventListener("click", (e) => {
  if (e.target.classList.contains("featured__item")) {
    e.target.classList.toggle("hidden");
  }
});

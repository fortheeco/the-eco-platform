let fileInput = document.querySelector("#fileInput");
let image=document.querySelector(".img-fluid")

fileInput.addEventListener('change',(e)=>{

    image.src=window.URL.createObjectURL(e.target.files[0])
})

let fileInput = document.querySelector("#fileInput");
let image=document.querySelector(".upload-img")

fileInput.addEventListener('change',(e)=>{
    
    image.src=window.URL.createObjectURL(e.target.files[0])
})

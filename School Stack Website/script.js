


const forms= document.querySelector(".forms");
      pwShowHide= document.querySelectorAll(".eye-icon");
      links = document.querySelectorAll(".link");
  
links.forEach(link => {
    link.addEventListener("click", e => {
       e.preventDefault(); //preventing form submit
       forms.classList.toggle("show-signup");
    })
})  




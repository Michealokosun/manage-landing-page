const hamburger = document.getElementById("hamburger")
const close = document.getElementById("close")
const menuItem = document.getElementById("menu")
const email = document.getElementById("email")



hamburger.addEventListener("click", ()=>{
    menuItem.classList.add("open")
    hamburger.style.display="none"
    close.style.display="block"
   
    
})
close.addEventListener("click", ()=>{
    close.style.display="none"
    hamburger.style.display="block"
    menuItem.classList.remove("open")


    
})




email.addEventListener("click" , ()=>{
    
})





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
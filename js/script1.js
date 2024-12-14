const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});




const signUpButton=document.getElementById("signUpButton");
const signInButton=document.getElementById("signInButton");
const signInForm=document.getElementById("signIn");
const signUpForm=document.getElementById("signup");

signUpButton.addEventListener('click', function(){
  signInForm.style.display="none";
  signUpForm.style.display="block";
})

signInButton.addEventListener('click', function(){
  signInForm.style.display="block";
  signUpForm.style.display="none";
})
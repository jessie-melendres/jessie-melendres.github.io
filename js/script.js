const togglepassword = document.querySelector('#togglepassword');
const password = document.querySelector('#password');

togglepassword.addEventListener('click', function(c) {
  const type = password.getAttribute("type") === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  this.classList.toggle('fa-eye');
});






$(document).ready(function(){
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});
''


/* signin/signup */
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
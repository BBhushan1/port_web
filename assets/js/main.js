/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction(){
  var menuBtn = document.getElementById("myNavMenu");

  if(menuBtn.className === "nav-menu"){
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// Function to download CV when the button is clicked
function downloadCV() {
  window.open('./assets/images/resumeMy.pdf', '_blank');
}

// Event listener to call the downloadCV function when the button is clicked
document.querySelector('.nav-button .btn').addEventListener('click', downloadCV);

function scrollToContact() {
  var contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}


/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function() {headerShadow()};

function headerShadow() {
  const navHeader =document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText",{
  strings : ["Data Scientist","ML Engineer","Developer"],
  loop : true,
  typeSpeed : 100, 
  backSpeed : 80,
  backDelay : 2000
})



/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
      origin: 'top',
      distance: '80px',
      duration: 2000,
      reset: true     
})

/* -- HOME -- */
sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})
sr.reveal('.project-btn',{delay: 200})

/* -- PROJECT BOX -- */
sr.reveal('.project-box',{interval: 200})

/*certificatios*/
sr.reveal('.top-header',{delay: 100})
sr.reveal('.certification-box',{interval: 200})
/* -- HEADINGS -- */
sr.reveal('.top-header',{})

/*contact*/
sr.reveal('.section__text__p1',{delay: 100})
sr.reveal('.contact-info',{interval: 200})
sr.reveal('.title',{interval: 200})
sr.reveal('.contact-info-upper-container',{interval: 200})


sr.reveal('.about-container',{delay: 100})
sr.reveal('.about-box',{interval: 200})
sr.reveal('.title',{interval: 200})
sr.reveal('.skills-container'),{interval: 200}
sr.reveal('.skills-list'),{delay: 200}
/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/*skills list*/
const skills = document.querySelectorAll('.skill');

  skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
      skill.style.transform = 'scale(1.1)';
    });

    skill.addEventListener('mouseout', () => {
      skill.style.transform = 'scale(1)';
    });
  }); 



/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
origin: 'left',
distance: '80px',
duration: 2000,
reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
origin: 'right',
distance: '80px',
duration: 2000,
reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


/*contact messsage form*/


/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
const scrollY = window.scrollY;

sections.forEach(current =>{
  const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
    sectionId = current.getAttribute('id')

  if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

  }  else {

    document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

  }
})
}

window.addEventListener('scroll', scrollActive)






// JavaScript animation


$(document).ready(function(){
  $(".contact-info").hover(
      function() {
          $(this).stop().animate({ backgroundColor: "#fff", borderColor: "#777" }, 300);
          $(this).find("h2, p, i").stop().animate({ color: "#777" }, 300);
      },
      function() {
          $(this).stop().animate({ backgroundColor: "var(--second-color)", borderColor: "transparent" }, 300);
          $(this).find("h2, p, i").stop().animate({ color: "var(--color-white)" }, 300);
      }
  );
});

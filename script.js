 // menu icon navbar
 const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

// Toggle menu on click
menuIcon.addEventListener("click", function () {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active"); //testing 
});

// Sticky header on scroll
window.addEventListener("scroll", function () {
  const header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

 
 // Scroll sections active link 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.navbar a');
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0);

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150; 
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all
                const targetLink = document.querySelector('.navbar a[href="#' + id + '"]');
                if (targetLink) {
                    targetLink.classList.add('active'); // Add active to the current section
                }
            });
        }
    });
});

// Sticky navbar
// window.addEventListener("scroll", function () {
//     const header = document.querySelector(".header");
//     header.classList.toggle("sticky", window.scrollY > 0);

//     // remove menu icon navbar when click navbar link (scroll)
//     window.addEventListener("scroll", function () {
//         menuIcon.classList.remove("bx-x");
//         navbar.classList.remove("active");
//       });
      
// });

// Highlight Active Link
const links = document.querySelectorAll(".navbar a");
links.forEach(link => {
    link.addEventListener("click", function () {
        links.forEach(l => l.classList.remove("active"));
        this.classList.add("active");
    });
});

 // remove menu icon navbar when click navbar link (scroll)
// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');




// Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });





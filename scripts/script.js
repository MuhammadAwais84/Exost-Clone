if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// Reload hone ke baad hamesha top pe scroll karo
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};


let discoverBtn = document.querySelector(".discover-btn");
discoverBtn.addEventListener("click", function () {
  window.scrollTo({
    top: window.innerHeight,  // poore page ki height
    behavior: "smooth"                // smooth scrolling
  });

})


// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  });
});



// Scroll hide/show navbar functionality
let lastScrollTop = 0;
window.addEventListener("scroll", function () {
  let st = window.pageYOffset || document.documentElement.scrollTop;
  let nav = document.querySelector(".top");

  if (st > lastScrollTop && st > 100) {
    // Scrolling down & past 100px
    gsap.to(nav, {
      transform: "translateY(-100%)",
      duration: 0.3,
      ease: "power2.out"
    });
  } else if (st < lastScrollTop || st <= 100) {
    // Scrolling up or near top
    gsap.to(nav, {
      transform: "translateY(0%)",
      duration: 0.3,
      ease: "power2.out"
    });
  }

  lastScrollTop = st <= 0 ? 0 : st;
});
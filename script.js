const arrowsArr = Array.from(document.querySelectorAll('.arrow'));
const menuToggle = document.querySelector('.menu-toggle');
const menuToggleLabel = document.querySelector('.menu-toggle-label');
const menuIcon = document.querySelector('.menu-icon');
const featuresCat = document.getElementById('features-sub-category');
const companyCat = document.getElementById('company-sub-category');

const heroImg = document.querySelector('.hero');

const navBar = document.querySelector('nav');

const desktopWidth = 1440;

menuToggle.addEventListener('change', () => {
  if (menuToggle.checked) {
    menuIcon.src = "images/icon-close-menu.svg";
    document.body.style.overflow = 'hidden';
  }

  else {
    menuIcon.src = "images/icon-menu.svg";
    document.body.style.overflow = 'scroll';
  }
})

arrowsArr.forEach(arrow => {
  arrow.addEventListener('click', e => {
    if (arrow.classList.contains('down')) {
      arrow.src = "images/icon-arrow-up.svg";
      arrow.classList.remove('down');
      
      if (arrow.id === "features-arrow") {
        featuresCat.classList.remove('hidden');
      }
      else if (arrow.id === "company-arrow") {
        companyCat.classList.remove('hidden');
      }
    }
    else {
      arrow.src = "images/icon-arrow-down.svg";
      arrow.classList.add('down');
      if (arrow.id === "features-arrow") {
        featuresCat.classList.add('hidden');
      }
      else if (arrow.id === "company-arrow") {
        companyCat.classList.add('hidden');
      }
    }
  })  
})

navBar.addEventListener('transitionrun', () => {
  menuToggleLabel.classList.toggle('disable-interaction')
  console.log('start')
})

navBar.addEventListener('transitionend', () => {
  menuToggleLabel.classList.remove('disable-interaction')
  console.log('end')
})

window.addEventListener('resize', () => {
  if (window.innerWidth >= desktopWidth) {
    // Desktop
    heroImg.src = 'images/image-hero-mobile.png';
    
  } else {
    heroImg.src = 'images/image-hero-desktop.png';
    // Mobile
  }
})
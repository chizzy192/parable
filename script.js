const sideBar = document.getElementById('sideBar');
const downBar = document.querySelector ('.downBar');
const nav = document.getElementsByName('nav');
const myHeader = document.getElementById('header');
const headingTop = document.getElementById('headingTop');
const navLinks = document.querySelectorAll('nav a');
const mediaTab = '(min-width: 958px)';
const mediaQueryTab = window.matchMedia(mediaTab);

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.carousel-wrapper');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  const slides = document.querySelectorAll('.carousel-slide');
  const totalSlides = slides.length;
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * slides[0].offsetWidth;
    wrapper.style.transform = `translateX(${offset}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  });
});

function handleScreenChange(e) {
    if (e.matches) {
        window.onscroll = function () {
            if(document.body.scrollTop >= 20 || document.documentElement.scrollTop >=20) {
                myHeader.classList.remove('myHead');
                headingTop.style.color = 'rgb(92, 92, 223)';
                navLinks.forEach(a => {
                    a.style.color = 'rgb(92, 92, 223)';
                });
            } else {
                myHeader.classList.add('myHead');
                headingTop.style.color = 'rgb(197, 192, 192)';
                navLinks.forEach(a => {
                    a.style.color = 'rgb(197, 192, 192)';
                });
            }}
        } else {
            window.onscroll = function () {
                if(document.body.scrollTop == 0 || document.documentElement.scrollTop == 0) {
                    myHeader.classList.remove('myHead');
                    headingTop.style.color = 'rgb(92, 92, 223)';
                    navLinks.forEach(a => {
                        a.style.color = 'rgb(92, 92, 223)';
                    });
                } else {
                    myHeader.classList.remove('myHead');
                    headingTop.style.color = 'rgb(92, 92, 223)';
                    navLinks.forEach(a => {
                        a.style.color = 'rgb(92, 92, 223)';
                    });
                }
            };
    }
};

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 755 +'px') {
        downBar.style.display = "flex";
    } else {
        downBar.style.display = "none";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const showSideBar = document.getElementById('showSideBar');
    const hiddenSideBar = document.getElementById('hiddenSideBar');
        showSideBar.addEventListener('click', function showSideBar() {
            if(showSideBar) {
                this.classList.add('hiddenMenu');
                downBar.style.display='flex';
                hiddenSideBar.classList.remove('hiddenMenu');
            } else {
                showSideBar.classList.remove('hiddenMenu');
                this.classList.add('hiddenMenu');
                downBar.style.display='none';
            }
        });
        hiddenSideBar.addEventListener('click', function hideSideBar() {
            if(hiddenSideBar) {
                showSideBar.classList.remove('hiddenMenu');
                this.classList.add('hiddenMenu');
                downBar.style.display='none';   
            }else {
                this.classList.add('hiddenMenu');
                downBar.style.display='flex';
                showSideBar.classList.remove('hiddenMenu')
            }
        });

});

handleScreenChange({ matches: mediaQueryTab.matches });
mediaTab.addEventListener('change', handleScreenChange);


 




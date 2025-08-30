const sideBar = document.getElementById('sideBar');
const downBar = document.querySelector ('.downBar');
const nav = document.getElementsByName('nav');

window.addEventListener('resize', function () {
    if (this.window.innerWidth >= 958) {
        downBar.style.display = "flex";
    } else {
        downBar.style.display = "none";
    }
})

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

 




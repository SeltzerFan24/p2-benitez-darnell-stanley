const menuBtn = document.querySelector('.hamburger');
const mobileNav = document.querySelector('.mobile-nav');
const mobileItem = document.querySelectorAll('.mobile-items');

menuBtn.addEventListener("click",() => {
	toggle ();
});

mobileItem.forEach(item => {
    item.addEventListener('click', () => {
        if (menuBtn.classList.contains('active')) {
            toggle ();
        }
    });
});


function toggle () {
    menuBtn.classList.toggle("active");
    mobileNav.classList.toggle("active");
}

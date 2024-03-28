
let pages = Array.from(document.getElementsByClassName('content'));
let navItems = Array.from(document.getElementsByClassName('nav-item'));
let buttonsEnters = Array.from(document.getElementsByClassName('click-on-enter'));

function paginate(pg) {
    // Hide all pages 
    pages.forEach(function(page) {
        page.style.display = 'none';
    });

    // Show the selected page
    let selectedPage = document.getElementById(pg + '-page');
    if (selectedPage) {
        selectedPage.style.display = 'block';
    }


    // remove active-nav class from all navItems
    navItems.forEach(function(element) {
        element.classList.remove('active-nav');
    });

    // add active-nav class for selected page
    let selectedNav = document.getElementById(pg + '-nav');
    if (selectedNav) {
        selectedNav.classList.add('active-nav');
    }

    // remove click-on-enter-active class from all buttonEnters
    buttonsEnters.forEach(function(btnE) {
        btnE.classList.remove('click-on-enter-active');
    });

    // add click-on-enter-active class for buttonsEnters on the selected page
    let activeBtn = document.getElementById(pg + '-btn');
    if (activeBtn) {
        activeBtn.classList.add('click-on-enter-active');
        console.log(7);
    }
}
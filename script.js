let typed = new Typed("#typing", {
    strings: ["Beautiful Graphics", "Functional Websites", "Working Mobile Apps"],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 1000,
    fadeOut: true,
    fadeIn: true,
    loop: true,
    showCursor: true,
    autoInsertCss: false
});

const navElement = document.querySelectorAll("nav ul li a");
for (let i = 0; i < navElement.length; i++) {
    const element = navElement[i];
    element.onclick = e=> {
        let n = 0;

        while(n < navElement.length) {
            navElement[n++].className = "";
        }

        e.target.className = "active";
    }
};


const portfolioCategory = document.querySelectorAll("section.portfolio ul li");
for (let i = 0; i < portfolioCategory.length; i++) {
    const element = portfolioCategory[i];
    element.onclick = e=> {
        let n = 0;

        while(n < portfolioCategory.length) {
            portfolioCategory[n++].className = "";
        }

        e.target.className = "active";
    }
};

let preloader = document.getElementById("preloader");
if (preloader) {
    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.remove();
            document.body.style.overflowY = "auto";
        }, 1000);
    });
};

window.onscroll = function() {
    if (this.scrollY >= document.querySelector(".about").offsetTop) {
        document.querySelector(".to-top").style.bottom = "15px";
    } else {
        document.querySelector(".to-top").style.bottom = "-50px";
    }

    if (this.scrollY < document.querySelector(".about").offsetTop - 1) {
        navElement[0].className = "active";
    }

    if (this.scrollY >= document.querySelector(".about").offsetTop - 1 && this.scrollY < document.querySelector(".about").offsetTop + document.querySelector(".about").offsetHeight) {
        navElement[0].className = "";
        navElement[1].className = "active";
    } else {
        navElement[1].className = "";
    }

    if (this.scrollY >= document.querySelector(".services").offsetTop - 1 && this.scrollY < document.querySelector(".services").offsetTop + document.querySelector(".services").offsetHeight) {
        navElement[1].className = "";
        navElement[2].className = "active";
    } else {
        navElement[2].className = "";
    }

    if (this.scrollY >= document.querySelector(".portfolio").offsetTop - 1 && this.scrollY < document.querySelector(".portfolio").offsetTop + document.querySelector(".portfolio").offsetHeight) {
        navElement[2].className = "";
        navElement[3].className = "active";
    } else {
        navElement[3].className = "";
    }

    if (this.scrollY >= document.querySelector(".testimonials").offsetTop - 1 && this.scrollY < document.querySelector(".testimonials").offsetTop + document.querySelector(".testimonials").offsetHeight) {
        navElement[3].className = "";
        navElement[4].className = "active";
    } else {
        navElement[4].className = "";
    }

    if (this.scrollY >= document.querySelector(".team").offsetTop - 1 && this.scrollY < document.querySelector(".team").offsetTop + document.querySelector(".team").offsetHeight) {
        navElement[4].className = "";
        navElement[5].className = "active";
    } else {
        navElement[5].className = "";
    }

    if (this.scrollY >= document.querySelector(".contact").offsetTop - 1) {
        navElement[5].className = "";
        navElement[6].className = "active";
    } else {
        navElement[6].className = "";
    }

    if (this.scrollY >= document.querySelector(".about").offsetTop) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, .85)";
    } else {
        document.querySelector("nav").style.backgroundColor = "#0D0D0D";
    }
};

document.querySelector(".to-top").addEventListener("click", function() {
    window.scroll({
        top: 0,
        behavior: "smooth"
    });
});

document.querySelector(".bars").onclick = function () {
    document.querySelector("nav ul").style.display = "flex";
    document.body.style.overflowY = "hidden";
};

document.querySelector("nav ul span").addEventListener("click", () => {
    document.querySelector("nav ul").style.display = "none";
    document.body.style.overflowY = "auto";
});

const navElements = document.querySelectorAll("nav ul li a");
for (let i = 0; i < navElements.length; i++) {
    navElements[i].addEventListener("click", function () {
        if (document.documentElement.clientWidth <= 991.98) {
            document.querySelector("nav ul").style.display = "none";
            document.body.style.overflowY = "auto";
        }
    });
};

window.addEventListener('load', () => {
    let portfolioContainer = document.querySelector('.portfolio-container');
    let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

    if (portfolioContainer) {
        let portfolioIsotope = new Isotope(portfolioContainer, {
            itemSelector: '.portfolio-item',
            layoutMode: 'fitRows'
        });
        for (let i = 0; i < portfolioFilters.length; i++) {
            const element = portfolioFilters[i];
            element.addEventListener('click', function(e) {
                e.preventDefault();
                portfolioIsotope.arrange({
                    filter: this.getAttribute('data-filter')
                });
                aos_init();
            }, true);
        }
    }
});

(() => {
    const portfolioLightbox = GLightbox({
        selector: '.portfolio-lightbox'
    });
})()

new WOW().init();
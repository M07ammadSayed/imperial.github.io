let typed = new Typed("#typing", {
    strings: ["Beautiful Graphics", "Functional Websites", "Working Mobile Apps"],
    typeSpeed: 150,
    backSpeed: 50,
    backDelay: 500,
    startDelay: 1000,
    fadeOut: false,
    fadeIn: false,
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

window.onscroll = function() {
    if (this.scrollY < document.querySelector(".about").offsetTop) {
        navElement[0].className = "active";
    }

    if (this.scrollY >= document.querySelector(".about").offsetTop && this.scrollY < document.querySelector(".services").offsetTop) {
        navElement[0].className = "";
        navElement[1].className = "active";
    } else {
        navElement[1].className = "";
    }

    if (this.scrollY >= document.querySelector(".services").offsetTop && this.scrollY < document.querySelector(".portfolio").offsetTop) {
        navElement[1].className = "";
        navElement[2].className = "active";
    } else {
        navElement[2].className = "";
    }

    if (this.scrollY >= document.querySelector(".portfolio").offsetTop && this.scrollY < document.querySelector(".testimonials").offsetTop) {
        navElement[2].className = "";
        navElement[3].className = "active";
    } else {
        navElement[3].className = "";
    }

    if (this.scrollY >= document.querySelector(".testimonials").offsetTop) {
        navElement[3].className = "";
        navElement[4].className = "active";
    } else {
        navElement[4].className = "";
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
        }, 100);
    });
};

window.onscroll = function () {
    if (this.scrollY >= document.querySelector(".about").offsetTop) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, .85)";
    } else {
        document.querySelector("nav").style.backgroundColor = "#0D0D0D";
    }
};

new WOW().init();
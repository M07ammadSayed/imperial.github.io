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

window.onscroll = function () {
    if (this.scrollY === document.querySelector("nav").offsetTop) {
        document.querySelector("nav").style.backgroundColor = "rgba(0, 0, 0, .85)";
    } else {
        document.querySelector("nav").style.backgroundColor = "#0D0D0D";
    }
};

wow = new WOW(
    {
        offset: 100
    }
)
wow.init();
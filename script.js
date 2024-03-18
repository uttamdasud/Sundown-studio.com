const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function page4Animation() {
    const elemCon = document.querySelector("#elem-container");
    const fixedImage = document.querySelector("#fixed-image");
    elemCon.addEventListener("mouseenter", function () {
        fixedImage.style.display = "block";
    });

    elemCon.addEventListener("mouseleave", function () {
        fixedImage.style.display = "none";
    });

    const elems = document.querySelectorAll(".elem");

    elems.forEach(function (el) {
        el.addEventListener("mouseenter", function () {
            const image = el.getAttribute("data-image");
            fixedImage.style.backgroundImage = `url(${image})`;
        });
    });
}

function swipperAnimatiion() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 50,
    });
}

function menuAnimation() {
    var menu = document.querySelector("nav h3");
    var full = document.querySelector("#full-scr");
    var navImg = document.querySelector("nav img");
    var flag = 0;
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0;
            navImg.style.opacity = 0;
            flag = 1;
        } else {
            full.style.top = "-100%";
            navImg.style.opacity = 1;
            flag = 0;
        }
    });
}

function loaderAnimation() {
    var loader = document.querySelector("#loader");
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}


swipperAnimatiion();
page4Animation();
menuAnimation();
loaderAnimation();


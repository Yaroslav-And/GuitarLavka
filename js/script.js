const images = document.querySelectorAll('.slider .slider-line img');
const sliderLine = document.querySelector('.slider-line');
let count = 0;
let width;

function init() {
    console.log('resize');
    width = document.querySelector('.slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';
    images.forEach(item => {
        item.style.width = width + 'px';
        item.style.height = 'auto';
    });
    rollSlider();
}

window.addEventListener('resize', init);
init();

document.querySelector('.btn-left').addEventListener('click', function () {
    count--;
    if (count < 0) {
        count = images.length - 1;
    }
    rollSlider();
});

document.querySelector('.btn-right').addEventListener('click', function () {
    count++;
    if (count >= images.length) {
        count = 0;
    }
    rollSlider();
});

function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
}

//слайдер 2
let offset = 0;// смещение от левого края
const productCards = document.querySelector(".products-cards");
const productCardsWidth = document.querySelector(".products-cards").offsetWidth;

document.querySelector('.card-right').addEventListener("click", function () {
    offset -= 1040;
    if (offset < -3120) {
        offset = 0;
    }
    productCards.style.left = +offset + "px";
});

document.querySelector('.card-left').addEventListener("click", function () {
    offset += 1040;
    if (offset > 0) {
        offset = -3120;
    }
    productCards.style.left = +offset + "px";
});


//стрелка прокрутки
function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        goTopBtn.classList.add('back_to_top-show');
    } else {
        goTopBtn.classList.remove('back_to_top-show');
    }
}

function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
}
let goTopBtn = document.querySelector('.back_to_top');

window.addEventListener('scroll', trackScroll);
goTopBtn.addEventListener('click', backToTop);


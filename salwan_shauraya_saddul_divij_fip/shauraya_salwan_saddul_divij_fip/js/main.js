const displayHeaderList = function () {
    const burgerBtn = document.querySelector('.burger-btn');
    const closeBtn = document.querySelector('.close-btn');
    const navList = document.querySelector('.header-lists');
    if (burgerBtn) {
        burgerBtn.addEventListener('click', function () {
            navList.classList.add('active-nav__list');
            burgerBtn.style.direction = 'none';
        })
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            navList.classList.remove('active-nav__list');
            burgerBtn.style.direction = 'block';
        })
    }
}

displayHeaderList()

const displaySearchInput = function () {
    const input = document.querySelector('.header-input');
    const searchIcon = document.querySelector('.header-search')
    if (searchIcon) {
        searchIcon.addEventListener('click', () => input.classList.toggle('active-input'))
    }
}

displaySearchInput()

const sliderFunction = function () {
    if (document.querySelector('.mySwiper')) {
        const swiper = new Swiper(".mySwiper", {
            loop: true,
            pagination: {
                el: ".swiper-pagination",
                type: "progressbar",
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
    }
}

sliderFunction()

const formValidation = function () {
    const inputs = document.querySelectorAll('.form-element');
    const inputSpan = document.querySelectorAll('.form-label span');
    const btn = document.querySelector('.form-btn');
    if (btn) {
        btn.addEventListener('click', function (e) {
            e.preventDefault()
            inputs.forEach((input, index) => {
                if (input.value === '') {
                    inputSpan[index].classList.add('show-after');
                } else {
                    inputSpan[index].classList.remove('show-after');
                }
            })
        })
    }
}

formValidation()


const popupFunction = function () {
    const popup = document.querySelector('.popup');
    const popupBg = document.querySelector('.popup-bg');
    const popupContent = document.querySelector('.popup-content');
    const closeBtn = document.querySelector('.close-popup_btn');
    if (popupBg) {
        popupBg.addEventListener('click', function (event) {
            if (!popupContent.contains(event.target)) {
                popup.classList.add('popup-close')
            }
        })
    }
    if (closeBtn) {
        closeBtn.addEventListener('click', function () {
            popup.classList.add('popup-close')
        })
    }
}

popupFunction();

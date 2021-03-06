const header = document.querySelector(".header");
const headerMenu = document.querySelector(".header-menu");
const headerMobilesBottom = document.querySelector(".header-mobiles-bottom");
const headerMobilesInner = document.querySelector(".bottom-inner");
const swiperProducts = document.querySelector(".swiper-products");
const burger = document.querySelector(".burger");
const headerClose = document.querySelector(".header-close-js");
const basketClose = document.querySelectorAll(".basket-close");
const loginClose = document.querySelector(".login-close");
const registrationClose = document.querySelector(".registration-close");
const basket = document.querySelector(".basket");
const headerBasket = document.getElementsByClassName("header-basket");
const noProducts = document.querySelector(".no-products");
const itemClose = document.getElementsByClassName("item-close");
const headerCatalog = document.getElementById("header-catalog-js");
const catalogSubmenu = document.getElementById("catalog-submenu-js");
const minusBtn = document.getElementsByClassName("reduce");
const plusBtn = document.getElementsByClassName("enlarge");
const favorites = document.getElementsByClassName("favorites");
const headerProfile = document.querySelector(".header-profile");
const login = document.querySelector(".login");
const registration = document.querySelector(".registration");
const registerNow = document.querySelector(".register-now");
const registered = document.querySelector(".registered");

// Burger menu
burger.addEventListener("click", function () {
    headerMobilesBottom.classList.add("show");
});

//close header mobiles
headerClose.addEventListener("click", function () {
    headerMobilesBottom.classList.remove("show");
});
//
// //outside click
// window.addEventListener('click', function (e) {
//     if (!headerMobilesInner.contains(e.target) && !headerClose.contains(e.target)) {
//         headerMobilesBottom.classList.remove("show")
//     }
// });

//basket show
for (let i = 0; i < headerBasket.length; i++) {
    headerBasket[i].addEventListener("click", function () {
        basket.classList.add("show")
    });
}

//basket close
for (let i = 0; i < basketClose.length; i++) {
    basketClose[i].addEventListener("click", function () {
        basket.classList.remove("show")
    });
}

// basket item close
for (let i = 0; i < itemClose.length; i++) {
    itemClose[i].addEventListener("click", function () {
        this.parentElement.remove();
        if (itemClose.length <= 0) {
            noProducts.style.display = "block";
            noProducts.parentElement.style.flexDirection = "row"
        }
    });
}

//login show
headerProfile.addEventListener("click", function () {
    login.classList.add("show")
});

//login hidden
loginClose.addEventListener("click", function () {
    login.classList.remove("show")
});

//registration show
registerNow.addEventListener("click", function () {
    login.classList.remove("show");
    registration.classList.add("show")
});

//registration hidden
registrationClose.addEventListener("click", function () {
    registration.classList.remove("show")
});
registered.addEventListener("click", function () {
    registration.classList.remove("show");
    login.classList.add("show")
});

//header catalog
headerCatalog.addEventListener("click", function () {
    catalogSubmenu.classList.toggle("show");
    if (catalogSubmenu.classList.contains("show")) {
        headerMenu.style.display = "none";
    } else {
        headerMenu.style.display = "block"
    }
});

// quantity
for (let i = 0; i < minusBtn.length; i++) {
    let input = plusBtn[i].parentElement.querySelector(".quantity-input");
    plusBtn[i].addEventListener("click", function () {
        input.value = +input.value + 1
    });
    minusBtn[i].addEventListener("click", function () {
        if (input.value <= 0) {
            input.value = 0
        } else {
            input.value = +input.value - 1
        }
    });
}

//favorites
for (let i = 0; i < favorites.length; i++) {
    favorites[i].addEventListener("click", function (e) {
        e.preventDefault();
        this.classList.toggle("active")
    })
}

// button active
const btnContour = document.querySelectorAll(".btn-contour");
const buttonsContainer = document.querySelector(".buttons-container-js");
buttonsContainer.addEventListener("click", (event) => {
    const elem = event.target.closest('.btn-contour');
    if (!elem) {
        return;
    }

    btnContour.forEach((item) => {
        if (item.classList.contains('active')) {
            item.classList.remove('active');
        }
    });

    elem.classList.add('active');
});

if (swiperProducts) {
    const mySwiperProducts = new Swiper('.swiper-products', {
        slidesPerView: 1,
        breakpoints: {
            768: {
                slidesPerView: 3,
            },
            1151: {
                slidesPerView: 4,
            }
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}

window.addEventListener('scroll', function () {
    if (window.pageYOffset > 163) {
        header.classList.add("fixed")
    } else {
        header.classList.remove("fixed")
    }
});

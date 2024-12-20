


const targetDate = new Date("2025-12-15T23:59:59").getTime();

// Update function
function updateCountdown() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
        clearInterval(timer);
        document.querySelector(".deals-time").innerHTML = "<h4>🎉 Happy New Year! 🎉</h4>";
        return;
    }

    // Calculate time parts
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Update HTML
    document.querySelectorAll(".deals-time ul li h4")[0].innerText = days;
    document.querySelectorAll(".deals-time ul li h4")[1].innerText = hours;
    document.querySelectorAll(".deals-time ul li h4")[2].innerText = minutes;
    document.querySelectorAll(".deals-time ul li h4")[3].innerText = seconds;
}

// Run the countdown every second
const timer = setInterval(updateCountdown, 1000);

// Call immediately to prevent delay
updateCountdown();



let dropDown = document.querySelector('#dropdown');
let dropMenu = document.querySelector('.dropdown');


dropDown.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent document click listener from triggering
    dropMenu.classList.toggle('drop-active');
});

document.addEventListener('click', function (e) {
    if (!dropMenu.contains(e.target)) {
        dropMenu.classList.remove('drop-active');
    }
});



/** ----------- SEARCH BAR START---------*/

let searchBar = document.querySelector('.search-icon');
let searchBody = document.querySelector('#search');
let searchCross = document.querySelector('.search-cross');
let sBody = document.querySelector('.search-body');
let searchFooter = document.querySelector('.search-footer');
let offCanvas = document.querySelector('.offcanvas-search-icon');
let hideOff = document.querySelector('.offcanvas');
let navBtn = document.querySelector('.hide-off');

searchBar.addEventListener('click', function () {
    if (!searchBody.classList.contains('search-active')) {
        searchBody.classList.add('search-active');
        sBody.classList.add('from-active');
    };

});

searchCross.addEventListener('click', function () {
    if (searchBody.classList.contains('search-active')) {
        searchBody.classList.remove('search-active');
        sBody.classList.remove('from-active');
    };
    hideOff.classList.remove('hide-active');
});

document.addEventListener('click', function (e) {
    // if(e.target.classList.contains('search-active')){
    //     searchBody.classList.remove('search-active');
    //     sBody.classList.remove('from-active');
    // };
    if (e.target.classList.contains('search-active') || e.target.classList.contains('hide-active')) {
        searchBody.classList.remove('search-active');
        sBody.classList.remove('from-active');
        hideOff.classList.remove('hide-active');
    }


});

searchFooter.addEventListener('click', function () {
    if (!searchBody.classList.contains('search-active')) {
        searchBody.classList.add('search-active');
        sBody.classList.add('from-active');
    };
});
offCanvas.addEventListener('click', function () {
    if (!searchBody.classList.contains('search-active')) {
        searchBody.classList.add('search-active');
        sBody.classList.add('from-active');
    };
    hideOff.classList.add('hide-active');


});

/** ----------- SEARCH BAR END  ---------*/


/**----------- OFFCANVUS START---------- */
let phndropDown = document.querySelector('#phn-dropdown');
let phndropMenu = document.querySelector('.phn-dropdown');


phndropDown.addEventListener('click', function (e) {
    e.stopPropagation(); // Prevent document click listener from triggering
    phndropMenu.classList.toggle('phn-active');
});

document.addEventListener('click', function (e) {
    if (!phndropMenu.contains(e.target)) {
        phndropMenu.classList.remove('phn-active');
    }
});
/**----------- OFFCANVUS END---------- */

/**-----------LOGIN FORM START--------- */
let loginForm = document.querySelector('#login_form');
let userAccount = document.querySelector('.user_account');
let loginCross = document.querySelector('.login_cross');

userAccount.addEventListener('click', function () {
    loginForm.classList.add('login_active');
});
loginCross.addEventListener('click', function () {
    loginForm.classList.remove('login_active');
});

/**-----------LOGIN FORM END--------- */

/**-----------SIGNUP FORM START--------- */
let signupForm = document.querySelector('#signup_form');
let newAccount = document.querySelector('.signup');
let signupCross = document.querySelector('.signup_cross');
let yourAccount = document.querySelector('.login_reform');

newAccount.addEventListener('click', function () {
    signupForm.classList.add('login_active');
    loginForm.classList.remove('login_active')
});
signupCross.addEventListener('click', function () {
    signupForm.classList.remove('login_active');
});
yourAccount.addEventListener('click', function () {
    loginForm.classList.add('login_active');
    signupForm.classList.remove('login_active');
})
/**-----------SIGNUP FORM END--------- */


/**-----------JACKET DESCRIPTION START--------- */
// let description = document.querySelector(".pd");
// let customer = document.querySelector(".cr");
// let additionalInfo = document.querySelector(".addition");
// let customerReview = document.querySelector('.customer-review')
// let productDescription = document.querySelector('.product-description')

// customer.addEventListener('click', function(){
//     customerReview.classList.add('active-customer');
//     productDescription.classList.add('description-remove');
//     additionalInfo.classList.remove('active-additional');
// });
// description.addEventListener('click', function(){
//     customerReview.classList.remove('active-customer');
//     productDescription.classList.remove('description-remove');
//     additionalInfo.classList.remove('active-additional');
// });
// additionalInfo.addEventListener('click', function(){
//     customerReview.classList.remove('active-customer');
//     productDescription.classList.add('description-remove');
//     additionalInfo.classList.add('active-additional');
// });








/**-----------JACKET DESCRIPTION END--------- */

/**-----------POPUP START--------- */


/**-----------POPUP END--------- */



// TOOLTIPS START
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/**JQUERY */

$(function () {
    $('.parent').slick({
        dots: true,
        arrows: false,
        dotsClass: 'container docts-active',
        autoplay: true,
        autoplaySpeed: 2000,
    });


    $('.parent-product').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // arrows:false,
        prevArrow: `<span class="left-arrow"><i class="fa-solid fa-angle-left"></i></span>`,
        nextArrow: `<span class="right-arrow"><i class="fa-solid fa-angle-right"></i></span>`,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    $('.deals-parent').slick({
        dots: true,
        arrows: false,
        dotsClass: 'deals-active',
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $('.parent-leadership').slick({
        dots: true,
        arrows: false,
        dotsClass: 'leader-active',
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        
    });
    $('.instagram').slick({
        dots: true,
        arrows: false,
        dotsClass: 'instagram-active',
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
    });
    $('.latest-parent').slick({
        dots: true,
        dotsClass:"latest-active",
        arrows: false,
        // prevArrow: `<span class="left-releted-btn"><i class="fa-solid fa-angle-left"></i></span>`,
        // nextArrow: `<span class="right-releted-btn"><i class="fa-solid fa-angle-right"></i></span>`,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.releted-product').slick({
        dots: false,
        arrows: true,
        prevArrow: `<span class="left-releted-btn"><i class="fa-solid fa-angle-left"></i></span>`,
        nextArrow: `<span class="right-releted-btn"><i class="fa-solid fa-angle-right"></i></span>`,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.parent-jackets').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.child-jackets'
    });
    $('.child-jackets').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.parent-jackets',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        arrows: false,
    });

   


});

// PRODUCT

// DEALS START

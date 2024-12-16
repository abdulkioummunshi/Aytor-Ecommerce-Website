let description = document.querySelector(".pd");
let customer = document.querySelector(".cr");
let customerReview = document.querySelector('.customer-review');
let productDescription = document.querySelector('.product-description');
let bangladesh = document.querySelector('.tk')
let addInfo = document.querySelector('.additional-info')

customer.addEventListener('click', function () {
    customerReview.classList.add('active-customer');
    productDescription.classList.add('description-remove');
    addInfo.classList.remove('active-additional');
});
description.addEventListener('click', function () {
    customerReview.classList.remove('active-customer');
    productDescription.classList.remove('description-remove');
    addInfo.classList.remove('active-additional');
});
bangladesh.addEventListener('click', function () {
    customerReview.classList.remove('active-customer');
    productDescription.classList.add('description-remove');
    addInfo.classList.add('active-additional');
});




/**-----------SHOPDETAIS START--------- */
let dec = document.querySelector('.dec');
let inc = document.querySelector('.inc');
let input = document.querySelector('.count-point')

inc.addEventListener('click', function () {
    if (Number(input.value) < 10) {
        input.value = Number(input.value) + 1;
        dec.style.cursor = "pointer"
    } else {
        inc.style.cursor = 'not-allowed';
    }
});

dec.addEventListener("click", function () {
    if (Number(input.value) > 1) {
        input.value = Number(input.value) - 1;
        inc.style.cursor = "pointer"
    } else {
        dec.style.cursor = 'not-allowed';
    }
});
/**-----------SHOPDETAIS END--------- */
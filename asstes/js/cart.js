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
let popUp = document.querySelector(".popup-cross");
let popupAdd = document.querySelector('#popup');
let popupContains = document.querySelector(".popup-contains");

popUp.addEventListener('click', function () {
    popupAdd.classList.add('popup-delete');
});
'use strict';

(function () {
    var coat = setup.querySelector('.wizard-coat');
    var eyes = setup.querySelector('.wizard-eyes');
    var fireball = setup.querySelector('.setup-fireball-wrap');
    var nameInput = setup.querySelector('.setup-user-name');


    var onCoatClick = function () {
        coat.style.fill = randomElement(COAT_COLORS);
    };
    var onEyesClick = function () {
        eyes.style.fill = randomElement(EYES_COLORS);
    };
    var onFireballClick = function () {
        fireball.style.background = randomElement(FIREBALL_COLORS);
    };

    coat.addEventListener('click', onCoatClick);
    eyes.addEventListener('click', onEyesClick);
    fireball.addEventListener('click', onFireballClick);
    nameInput.addEventListener('invalid', function (evt) {
        if (nameInput.validity.tooShort) {
            nameInput.setCustomValidity('Имя должно состоять как минимум из двух символов');
        } else if (nameInput.validity.tooLong) {
            nameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
        } else if (nameInput.validity.valueMissing) {
            nameInput.setCustomValidity('Это обязательное поле');
        };
    })
})();
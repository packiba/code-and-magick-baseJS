'use strict';

(function () {
    var coat = setup.querySelector('.wizard-coat');
    var eyes = setup.querySelector('.wizard-eyes');
    var fireball = setup.querySelector('.setup-fireball-wrap');
    var nameInput = setup.querySelector('.setup-user-name');

    var COAT_COLORS = [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
    ]
    var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
    var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    var curEyesColor = 'black';
    var curCoatColor = 'rgb(101, 137, 164)';
    var curFireballColor = '#ee4830';

    // функция выбора случайного элемента из массива
    var randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    var add_rating = function () {
        var newArr = wizards;
        newArr.forEach(function (item) {
            var rating = 4 * (item.colorCoat === curCoatColor) + 2 * (item.colorEyes === curEyesColor) + 1 * (item.colorFireball === curFireballColor);
            item.rating = rating;
        });
        return newArr.sort(function (left, right) {
            return right.rating - left.rating;
        });
    }

    var update = function () {
        updateWizards(add_rating());
    };

    var onCoatClick = function () {
        curCoatColor = randomElement(COAT_COLORS);
        coat.style.fill = curCoatColor;
        debounce(update);
    };
    var onEyesClick = function () {
        curEyesColor = randomElement(EYES_COLORS);
        eyes.style.fill = curEyesColor;
        debounce(update);
    };
    var onFireballClick = function () {
        curFireballColor = randomElement(FIREBALL_COLORS);
        fireball.style.background = curFireballColor;
        debounce(update);
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
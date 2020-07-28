'use strict';

(function () {
    // данные для генерации волшебников
    var FIRST_NAMES = ['Иван', 'Хулио', 'Василий', 'Кристоф', 'Виктор', 'Игнат', 'Аристарх', 'Джон'];

    var LAST_NAMES = ['Иглесиас', 'Верон', 'Романов', 'Вальц', 'Зозуля', 'Кожедуб', 'Великий', 'Джонсон'];

    window.COAT_COLORS = [
        'rgb(101, 137, 164)',
        'rgb(241, 43, 107)',
        'rgb(146, 100, 161)',
        'rgb(56, 159, 117)',
        'rgb(215, 210, 55)',
        'rgb(0, 0, 0)'
    ]

    window.EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

    window.FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

    // функция выбора случайного элемента из массива
    window.randomElement = function (arr) {
        return arr[Math.floor(Math.random() * arr.length)]
    }

    // функция для случайной генерации волшебника
    var generateWizard = function (fNames, lNames, cColors, eColors) {
        var wizard = {
            name: `${randomElement(fNames)} ${randomElement(lNames)}`,
            coatColor: randomElement(cColors),
            eyesColor: randomElement(eColors)
        };
        return wizard
    }

    // массив из 4-х волшебников
    window.wizards = [];
    for (var i = 0; i < 4; i++) {
        wizards.push(generateWizard(FIRST_NAMES, LAST_NAMES, COAT_COLORS, EYES_COLORS));
    }
})();
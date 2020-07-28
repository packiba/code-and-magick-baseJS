'use strict';

(function () {
    // показываем окно похожих персонажей
    var setupSimilar = document.querySelector('.setup-similar');
    setupSimilar.classList.remove('hidden');

    var similarList = document.querySelector('.setup-similar-list');

    var wizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    // заполняем окно похожих персонажей из массива волшебников
    for (var i = 0; i < 4; i++) {
        var wizardElement = wizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;
        similarList.appendChild(wizardElement);
    }
})();
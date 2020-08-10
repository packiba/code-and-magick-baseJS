'use strict';

(function () {
    window.similarListElement = document.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

    window.renderWizards = function (wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < 4; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        };
        similarListElement.appendChild(fragment);
    };

    var renderWizard = function (wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement;
    };
})();
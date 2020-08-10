'use strict';

(function () {
    window.updateWizards = function (wizards) {
        var wizardsItemList = document.querySelectorAll('.setup-similar-item');
        wizardsItemList.forEach(function (item, i) {
            item.querySelector('.setup-similar-label').textContent = wizards[i].name;
            item.querySelector('.wizard-coat').style.fill = wizards[i].colorCoat;
            item.querySelector('.wizard-eyes').style.fill = wizards[i].colorEyes;
        });
    }
})();
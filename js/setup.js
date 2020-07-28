'use strict';

(function () {
  // окно настройки персонажа
  window.setup = document.querySelector('.setup');
  // кнопка открытия окна настройки персонажа
  var setupOpen = document.querySelector('.setup-open');
  // кнопка закрытия окна настройки персонажа
  var setupClose = window.setup.querySelector('.setup-close');

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === 27) {
      closePopup();
    };
  }

  var onSetupOpenEnterPress = function (evt) {
    if (evt.keyCode === 13) {
      openPopup();
    }
  }

  var onSetupCloseEnterPress = function (evt) {
    if (evt.keyCode === 13) {
      closePopup();
      evt.stopPropagation();
    }
  }

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    setupClose.addEventListener('click', closePopup);
    setupClose.addEventListener('keydown', onSetupCloseEnterPress);
    document.removeEventListener('keydown', onSetupOpenEnterPress);
  }

  var closePopup = function () {
    setup.classList.add('hidden');
    document.addEventListener('keydown', onSetupOpenEnterPress);
    document.removeEventListener('keydown', onPopupEscPress);
  }

  setupOpen.addEventListener('click', openPopup);
  setupOpen.addEventListener('keydown', onSetupOpenEnterPress);
})();
'use strict';

(function () {
  // окно настройки персонажа
  window.setup = document.querySelector('.setup');
  // кнопка открытия окна настройки персонажа
  var setupOpen = document.querySelector('.setup-open');
  // кнопка закрытия окна настройки персонажа
  var setupClose = window.setup.querySelector('.setup-close');

  var KeyCode = {
    'ENTER': 13,
    'ESC': 27
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === KeyCode.ESC) {
      closePopup();
    };
  }

  var onSetupOpenEnterPress = function (evt) {
    if (evt.keyCode === KeyCode.ENTER) {
      openPopup();
    }
  }

  var onSetupCloseEnterPress = function (evt) {
    if (evt.keyCode === KeyCode.ENTER) {
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
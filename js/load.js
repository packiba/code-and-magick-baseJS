'use strict';

(function () {
    var URL = 'https://js.dump.academy/code-and-magick/data';
    var CALLBACK_NAME = 'jsonp';
    var setupSimilarWizard = document.querySelector('.setup-similar');
    window.wizards = [];


    window[CALLBACK_NAME] = function (data) {
        showSimilarWizards();
        wizards = data;
        renderWizards(wizards);
    };

    var loader = document.createElement('script');
    loader.src = URL + '?callback=' + CALLBACK_NAME;
    loader.addEventListener('error', function () {
        document.body.textContent = 'Произошла ошибка при загрузке данных';
    });
    document.body.appendChild(loader);


    window.onSuccess = function (data) {
        console.log(data);
    };

    window.onError = function (message) {
        console.error(message);
    };

    window.onLoad = function (xhr) {
        var error;
        switch (xhr.status) {
            case 200:
                onSuccess(xhr.response);
                break;
            case 400:
                error = 'Неверный запрос';
                break;
            case 401:
                error = 'Пользователь не авторизован';
                break;
            case 404:
                error = 'Ничего не найдено';
                break;
            default:
                error = 'Статус ответа: ' + xhr.status + ' ' + xhr.statusText;
        }
        if (error) {
            onError(error);
        };
    };

    // window.load = function (onSuccess, onError) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.responseType = 'json';
    //     xhr.addEventListener('load', onLoad);
    //     xhr.addEventListener('error', function () {
    //         onError('Произошла ошибка соединения');
    //     });
    //     xhr.addEventListener('timeout', function () {
    //         onError('Запрос не успрел выполниться за ' + xhr.timeout + 'мс');
    //     });

    //     xhr.open('GET', URL);
    //     xhr.send();
    // }

    // показываем окно похожих персонажей
    var showSimilarWizards = function () {
        setupSimilarWizard.classList.remove('hidden');
    };

})();
'use strict';

(function () {
    var URL = 'https://js.dump.academy/code-and-magick';
    var form = setup.querySelector('.setup-wizard-form');

    window.upload = function (data, onSuccess) {
        var xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener('load', onLoad(xhr));
        xhr.addEventListener('error', function () {
            onError('Произошла ошибка соединения');
        });
        xhr.addEventListener('timeout', function () {
            onError('Запрос не успрел выполниться за ' + xhr.timeout + 'мс');
        });
        xhr.open('POST', URL);
        xhr.send(data);

    }

    form.addEventListener('submit', function (evt) {
        evt.preventDefault();
        upload(new FormData(form), function (response) {
            setup.classList.add('hidden');
        })
    })
})();
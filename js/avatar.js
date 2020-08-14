'use strict';

(function () {
    var FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

    var fileChooser = document.querySelector('.upload input[type=file]');
    var previewSetupOpen = document.querySelector('.setup-user-pic');
    var previewSetupClose = document.querySelector('.setup-open-icon');

    fileChooser.addEventListener('change', function () {
        var file = fileChooser.files[0];
        var fileName = file.name.toLowerCase();

        var anyMatches = FILE_TYPES.some(function (it) {
            return fileName.endsWith(it);
        });
        if (anyMatches) {
            var reader = new FileReader();

            reader.addEventListener('load', function () {
                previewSetupOpen.src = reader.result;
                previewSetupClose.src = reader.result;
            });

            reader.readAsDataURL(file);
        }
    });
})();
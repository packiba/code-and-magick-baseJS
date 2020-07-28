'use strict';

(function () {
    var setupHandle = setup.querySelector('.setup-user-pic');

    setupHandle.addEventListener('mousedown', function (evt) {
        evt.preventDefault();

        var startCoord = {
            x: evt.clientX,
            y: evt.clientY
        };

        var onMouseMove = function (moveEvt) {
            moveEvt.preventDefault();

            var shift = {
                x: startCoord.x - moveEvt.clientX,
                y: startCoord.y - moveEvt.clientY
            };

            startCoord = {
                x: moveEvt.clientX,
                y: moveEvt.clientY
            };

            setup.style.top = (setup.offsetTop - shift.y) + 'px';
            setup.style.left = (setup.offsetLeft - shift.x) + 'px';
        };


        var onMouseUp = function (upEvt) {
            upEvt.preventDefault();

            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };

        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    })
})();
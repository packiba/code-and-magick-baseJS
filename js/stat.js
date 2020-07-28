'use strict';

window.renderStatistics = function (ctx, names, times) {
  var dataCloud = {
    startX: 100,
    startY: 10,
    widthRect: 420,
    heightRect: 270,
    margin: 10
  };

  var drawCloud = function (x, y, w, h, r1, r2, r3, colr, m) {
    ctx.fillStyle = colr;
    ctx.beginPath();
    ctx.moveTo(x + m, y + 10 + m);
    ctx.arcTo(x + m, y + m, x + 10 + m, y + m, r1);
    ctx.arcTo(x + w / 2 + m, y + 30 + m, x + w - 10 + m, y + m, r3);
    ctx.arcTo(x + w + m, y + m, x + w + m, y + 10 + m, r1);
    ctx.arcTo(x + w - 30 + m, y + h / 2 + m, x + w + m, y + h - 10 + m, r2);
    ctx.arcTo(x + w + m, y + h + m, x + w - 10 + m, y + h + m, r1);
    ctx.arcTo(x + w / 2 + m, y + h - 30 + m, x + 10 + m, y + h + m, r3);
    ctx.arcTo(x + m, y + h + m, x + m, y + h - 10 + m, r1);
    ctx.arcTo(x + 30 + m, y + h / 2 + m, x + m, y + 10 + m, r2);
    ctx.fill();
  }

  drawCloud(dataCloud.startX, dataCloud.startY, dataCloud.widthRect, dataCloud.heightRect, 10, 250, 400, 'rgba(0,0,0,0.5)', dataCloud.margin);
  drawCloud(dataCloud.startX, dataCloud.startY, dataCloud.widthRect, dataCloud.heightRect, 10, 250, 400, '#fff', 0);

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура, вы победили!', 240, 45);
  ctx.fillText('Список результатов:', 230, 65);

  var maxVal = Math.max.apply(null, times);

  for (var i = 0; i < names.length; i++) {

    var val = Math.floor(120 * times[i] / maxVal);
    var style;

    if (names[i] == 'Вы') {
      style = 'rgba(255,0,0,1)';
    } else {
      var alf = Math.random() / 1.5;
      style = `rgba(0, 0, 255, ${0.2 + alf})`;
    }

    ctx.fillStyle = style;
    ctx.fillRect(155 + i * 90, 103 + 120 - val, 40, val)

    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), 155 + i * 90, 85 + 120 - val);
    ctx.fillText(names[i], 155 + i * 90, 230);
  }
}


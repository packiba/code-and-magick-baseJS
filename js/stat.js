'use strict';

window.renderStatistics = function (ctx, names, times) {
  // Рисует тень облака
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(110, 20, 420, 270);

  // Рисует облако
  ctx.fillStyle = '#ffffff';
  ctx.strokeRect(100, 10, 420, 270);
  ctx.fillRect(100, 10, 420, 270);

  // Выводим надпись на облаке
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 120, 40);
  ctx.fillText('Список результатов: ', 120, 60);

  // Ищем наихудший результат
  var max = -1;

  for (var i = 0; i < times.length; i++) {
    var time = times[i];
    if (time > max) {
      max = time.toFixed(0);
    }
  }

  // Рисуем гистограмму
  var histogramHeight = 150;
  var step = histogramHeight / (max - 0);

  ctx.fillRect(120 + 90 * 0, 245 - times[0] * step, 40, times[0] * step);
  ctx.fillRect(120 + 90 * 1, 245 - times[1] * step, 40, times[1] * step);
  ctx.fillRect(120 + 90 * 2, 245 - times[2] * step, 40, times[2] * step);
  ctx.fillRect(120 + 90 * 3, 245 - times[3] * step, 40, times[3] * step);

  ctx.fillText(names[0], 120 + 90 * 0, 245 + 20);
  ctx.fillText(names[1], 120 + 90 * 1, 245 + 20);
  ctx.fillText(names[2], 120 + 90 * 2, 245 + 20);
  ctx.fillText(names[3], 120 + 90 * 3, 245 + 20);

  ctx.fillText(times[0].toFixed(0), 120 + 90 * 0, 245 - times[0] * step - 15);
  ctx.fillText(times[1].toFixed(0), 120 + 90 * 1, 245 - times[1] * step - 15);
  ctx.fillText(times[2].toFixed(0), 120 + 90 * 2, 245 - times[2] * step - 15);
  ctx.fillText(times[3].toFixed(0), 120 + 90 * 3, 245 - times[3] * step - 15);

};

// Алгоритм решения
// 1. Создаем файл js/stat.js в учебном проекте и подключаем его к нашему проекту
// 2. В новом файле js/stat.js создаем объект window с методом renderStatistics
// 3. Определеяем для него фуннкцию  параметрами ctx, names, times
// 4. Проверяем работу функции
// 5. Нарисуем облако и тень от него
// 6. Выведем надпись говорящую о победе
// 7. Определим худшее время
// 8. Нарисуем гистограмму
// 9. Зададим координаты гистошраммы так, чтобы она стала вертикальной
// 10. Выровняем столбцы гистограммы по нижнему краю
// 11. Обобщим алгоритм при помощи цикла
// 12. Вынесем в переменные, непонятные числа
// 13. Вынесем переменные за цикл
// 14. Зададим цвет для столбцов
// 15. Сделаем рефакторинг кода, разбив его на более мелкие функции

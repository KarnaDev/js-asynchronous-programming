// Реализуйте и экспортируйте асинхронную функцию compareFileSizes(),
// которая сравнивает размеры двух файлов и передает результат сравнения
// в переданную callback-функцию. Если первый файл больше второго,
// то она передает единицу, если размеры равны, то ноль, иначе — -1.
import fs from 'fs';

const compareFileSizes = (filepath1, filepath2, callback) => {
  fs.stat(filepath1, (err1, stats1) => {
    if (err1) {
      callback(err1);
      return;
    }

    fs.stat(filepath2, (err2, stats2) => {
      if (err2) {
        callback(err2);
        return;
      }

      // Compare the file sizes and return the result via the callback
      const result = Math.sign(stats1.size - stats2.size);
      callback(null, result);
    });
  });
};

export default compareFileSizes;

// const filepath1 = 'Makefile';
// const filepath2 = '__tests__/info.test.js';
// compareFileSizes(filepath1, filepath2, (_err, result) => console.log(result));

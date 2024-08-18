// Реализуйте асинхронную функцию, которая записывает данные по указанному пути и оповещает
// о завершении работы через переданный колбек. Экспортируйте функцию по умолчанию.
import fs from 'fs';

const write = (filepath, data, callback) => {
  fs.writeFile(filepath, data, 'utf-8', (err) => {
    if (err) {
      throw err;
    }
    callback();
  });
};

export default write;

// write('./myfile', 'data', () => {
//   console.log('success');
// });

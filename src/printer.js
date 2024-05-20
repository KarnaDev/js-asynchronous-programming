// Реализуйте и экспортируйте по умолчанию асинхронную функцию,
// которая читает данные файла по указанному пути и выводит их в консоль.
import fs from 'fs';

// File handling function
const readFile = (err, content) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  // Prints the content of the file after it has been successfully read
  console.log(content);
};

// Asynchronously read the file
export default (path) => fs.readFile(path, 'utf-8', readFile);

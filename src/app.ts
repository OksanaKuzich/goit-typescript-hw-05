// Есть функция которая возвращает Promise, он возвращает массив строк и чисел, опишите правильно тип.
function getPromise(): Promise<Array<string | number>> {
  return new Promise((resolve) => {
    resolve(["Text", 50]);
  });
}

getPromise().then((data) => {
  console.log(data);
});

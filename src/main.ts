// 1. Использовать расширение файлов .ts
// 2. Скачать typescript (npm i typescript)
// 3. Создать конфиг с помощью команды npx tsc --init

// ヽ(°□° )ノ Новое ключевое слово при работе с nodeJS в терминале:
// npx - запускает библиотеку внутри проекта (терминал)
// утилита которая позволяет работать с typeScript в терминале - tsc (typeScript compiler)

let supernumber: number = 10.5
supernumber = 5 
let justanumber: string = 'rinat'
let sum = supernumber+justanumber 

// Для вказівки типу змінної після назви змінної ставимо : та пишемо тип (number, string)

function sumNumbers(a: number, b: number): number{
    return a+b
}

function divNumbers(a: number, b: number): number{
    return a/b
}

sumNumbers(supernumber, 5)

const main = {
    sumNumbers: sumNumbers,
    divNumbers: divNumbers
}

export {sumNumbers, divNumbers};
export {supernumber}
export default main



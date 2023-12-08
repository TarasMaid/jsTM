// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і
const pr= function (a,b) {
    return a*b
};
let result = pr(4.3,7.9)
console.log(result);


//- створити функцію яка обчислює та повертає площу кола з радіусом r
const  sRound=  (r)=> {


    return Math.PI * Math.pow(r, 2)
}

console.log(sRound(4));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
const sCilindr=(r, h)=> {
    return 2 * Math.PI * r * (r + h);

}

console.log(sCilindr(5, 10));

// - створити функцію яка приймає масив та виводить кожен його елемент
const logger=(arr)=> {
    for (const item of arr) {
        console.log(item)
    }
}

logger([13, 56, `dfdd`, `Mihail`, 10000, true, false]);
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
const paragraf=(text)=> {
    document.write(`<p>${text}</p>`);
}

paragraf(`Azov strong!!!`);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
const CreteUL=(text)=> {
    document.write(`
<ul>
<li>${text}</li>
<li>${text}</li>

 <li>${text}</li>
<ul>
`);
}

CreteUL(`Azov strong!!!`)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function CreteULt(text, count) {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`)

    }
    document.write(`</ul>`);
}

CreteULt(`Azov strong!!!`, 4)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function Creteli(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`);
}

Creteli(['lalalala', 9, 'u vas est 9 ser? ', 'nas', 25000, 'i mu idiom rozbiratsa', `pochemy v strane tvoritsa bezpridel???!!!`, isNaN()])


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function Creteli(arr) {
    document.write(`<ul>`);
    for (const item of arr) {
        document.write(`<li>${item}</li>`)

    }
    document.write(`</ul>`);
}

Creteli(['lalalala', 9, 'u vas est 9 ser? ', 'nas', 25000, 'i mu idiom rozbiratsa', `pochemy v strane tvoritsa bezpridel???!!!`, isNaN()])


// - створити функцію яка повертає найменьше число з масиву
const users = [
    {id: 1, name: `Petro`, age: 30},
    {id: 2, name: `Ivan`, age: 29},
    {id: 3, name: `Ira`, age: 19},
    {id: 4, name: `Max`, age: 25},
    {id: 5, name: `Vova`, age: 38},
    {id: 6, name: `Kolya`, age: 19},
]


function objArr(arr) {
    for (const user of arr) {
        document.write(`<div>${user.id}-${user.name}-${user.age}</div>`)
    }

}

objArr(users);
// 10- створити функцію яка повертає найменьше число з масиву
const numbers = [100, 193, -143, 14.454, 45.78, 934, 3, 7, 1, -10];

function minOfArr(arr) {
    let min = arr[0]
    for (const num of arr) {
        if (min > num) {
            min = num
        }

    }
    return min

}

console.log(minOfArr(numbers));

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let result = 0;
    for (const num of arr) {

        result += num;

    }
    return result;

}


console.log(sum([1, 2, 10]));
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    const num1 = arr[index1];
    const num2 = arr[index2];
    arr[index1] = num2;
    arr[index2] = num1;

    return arr;
}


console.log(swap([11, 22, 33, 44], 0, 1));


// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    for (const currency of currencyValues) {
        if (currency.currency === exchangeCurrency) {
            return sumUAH / currency.value

        }

    }

}

const resulta = exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'EUR')
console.log(resulta);
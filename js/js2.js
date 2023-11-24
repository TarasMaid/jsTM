// 1- Масиви та об'єкти://
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
// let ten = [
//     `book1`,
//    100,
//     '145',
//     true,
//     "indeferend",
//     `eleven`,
//     false,
//     200,
//     'BMW',
//     'Putin p1d@ras'
//
// ]
//
//
// console.log(ten);

// 2.1 - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
// let book1 = {
//     title: 'Harry',
//     pageCount: 500,
//     genre: 'Horror'
// }
// let book2 = {
//     title: 'Harry1',
//     pageCount: 5000,
//     genre: 'Horror1'
// }
// let book3 = {
//     title: 'Harry2',
//     pageCount: 1500,
//     genre: 'Horror1'
// }
//
// console.log(book1)

// // 2.2- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
//
//
// let book = {
//     title: 'Harry',
//     pageCount: null,
//     genre: 'Horror',
//     author: [{name:'Jason', age: 145}, {name:'Oleg', age: 20}]
// }
// console.log(book);

// 3 - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
// Вивести в консоль пароль кожного користувача
//
//
// let usersArr = [
//     {name: 'Max',  userName: 'JS', password: 123456},
//     {name: 'Max1', userName: 'JS-1', password: 123457},
//     {name: 'Max2', userName: 'JS-2', password: 123458},
//     {name: 'Max3', userName: 'JS-3', password: 123459},
//     {name: 'Max4', userName: 'JS-4', password: 1234500},
// ];


// console.log('password: ' + usersArr[0]['password']);
// console.log('password: ' + usersArr[0].password);
// console.log('password: '+ usersArr[1]['password']);
// console.log('password'+ usersArr[1].password);
// console.log('password: '+ usersArr[2]['password']);
// console.log('password'+ usersArr[2].password);
// console.log('password: '+ usersArr[3]['password']);
// console.log('password'+ usersArr[3].password);
// console.log('password: '+ usersArr[4]['password']);
// console.log('password'+ usersArr[4].password);
// console.log('password: '+ usersArr[5]['password']);
// console.log('password'+ usersArr[5].password);
// console.log('password: '+ usersArr[6]['password']);
// console.log('password'+ usersArr[6].password);
// console.log('password: '+ usersArr[7]['password']);
// console.log('password'+ usersArr[7].password)
// console.log('password: '+ usersArr[8]['password']);
// console.log('password'+ usersArr[8].password)
// console.log('password: '+ usersArr[9]['password']);
// console.log('password'+ usersArr[9].password)
// console.log('password: '+ usersArr[10]['password']);
// console.log('password'+ usersArr[10].password)


// {2}
//
// Логічні розгалуження:
//    4 - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
// let x = 1;
// if(x !== 0){
//     console.log(true)
// }else {
//     console.log(false)
// }

// 5- Дано змінну time яка рівна числу від 0 до 59.
// Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
// let time = 35;
// if (time >= 0 && time <= 14) {
//     console.log('1 чверть години')
// } else if (time >= 15 && time <= 29) {
//     console.log('2 чверть години')
// } else if (time >= 30 && time <= 44) {
//     console.log('3 чверть години')
// } else if (time >= 45 && time <= 59) {
//     console.log('4 чверть години')
// }


// 6- У змінній day дано якесь число від 1 до 31.
// // Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
// let day = "fdfd";
// if (day >= 0 && day <=15){
//     console.log('1 половина місяця')
// }
// else
// if (day >= 16&&day<=31){
//     console.log('2 половина місяця')
// }
// else {
//     alert('неправильна дата')
//     console.log('ERROR')
// }
//
// if (day >= 0 && day <=15 ){
//     console.log('перша половина місяцю')
// }else if(day> 15 && day <=31){
//     console.log('Друга половина місяцю')
// }else {
//     alert('WRONG DAY')
//     console.log('ERROR')
// }

// 7- Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається
// інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
// let week = +prompt('Розклад на тиждень', 4);
// switch (week) {
//     case 1:
//         console.log('Робота');
//         break
//     case 2:
//         console.log('Робота');
//         break
//     case 3:
//         console.log('Робота');
//         break
//     case 4:
//         console.log('Робота');
//         break
//     case 5:
//         console.log('Робота');
//         break
//     case 6:
//         console.log('Прибрати в домі');
//         break
//
//     case 7:
//         console.log('Кайфуєм');
//         break
//
// default:
//     console.log('страдаєш херньою');
// break
//
// }

//    8 - Користувач вводить або має два числа.
//         Потрібно знайти та вивести максимальне число з тих двох //
//         Також потрібно врахувати коли введені рівні числа.
// let num1 = +prompt('перше число',2)
// let num2 = +prompt('Введіть число',10)
// if (num1 < num2){
//     console.log('маскимальне число :'+num2)
// }
// else if (num1 > num2){
//
//     console.log('Максимальне число це:'+num1)
// }
// else {
//     console.log('рівність')
//
//
// }
// let num1 = 10;
// let num2 = +prompt('Etner number', 10);
// if (num1 === num2){
//     console.log('Числа рівні')
// }else if(num1 > num2){
//     console.log('MAX is: ' + num1)
// }else{
//     console.log('MAX is: ' + num2)
// }

//
//     9- є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//         за допомоги  оператора || буде присвоювати змінній х значення "default"
//         якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
// let  x = '0';
//     if (!x){
//         console.log(false);
//     }
// else {
//         console.log("default");
//     }





//
//    10 - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArra
// let array = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// if(array[0].monthDuration >= 5)
// {console.log('Супер')};
// if(array[1].monthDuration >= 5){console.log('Супер')};
// if(array[2].monthDuration >= 5){console.log('Супер')};
// if(array[3].monthDuration >= 5){
//     console.log('Супер ')
// }else{
//     console.log('навчання мінmit 4 місяців ')
// }
// if(array[4].monthDuration >= 5){console.log('Супер ')};
// if(array[5].monthDuration >= 5){
//     console.log('Супер ')
// }else{
//     console.log('навчався меньше 4 місяців ')
// }
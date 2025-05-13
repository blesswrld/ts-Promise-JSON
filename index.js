// Объект с данными для теста
var jsonTest = '{"name": "Test", "data": "4"}';
// Парсим jsonTest в JSON формат
var objFromJson = JSON.parse(jsonTest);
// Массив дел (изначально пуст)
var toDoList = [];
// Выполняем запрос и преобразовываем его в json-объект
// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then((response) => response.json())
//     .then((json) => {
//         // Условие если "id" есть в json
//         if ("id" in json) {
//             // Пушим данные в json
//             toDoList.push(json);
//         }
//         // Вывод в консоль
//         console.log(toDoList);
//     });
fetch("https://jsonplaceholder.typicode.com/todos")
    .then(function (response) { return response.json(); })
    .then(function (json) {
    // Условие если "id" и "userId" есть в json
    if ("id" in json && "userId" in json) {
        // Пушим данные в json
        toDoList.push(json);
        // toDoList[0].id
        // Проверяем массив на массив
    }
    else if (Array.isArray(json)) {
        // Заменяем пустой массив на данные которые приходят
        toDoList = json;
    }
    else {
        console.log("".concat(json, " - is a string"));
    }
    // Вывод в консоль
    console.log(toDoList);
});

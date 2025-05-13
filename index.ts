// Объект с данными для теста
const jsonTest = '{"name": "Test", "data": "4"}';

interface JSONTest {
    name: string;
    data: number;
}

// Парсим jsonTest в JSON формат
const objFromJson = JSON.parse(jsonTest);

// Массив дел (изначально пуст)
let toDoList: ToDo[] = [];

// Интерфейс
interface ToDo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

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
    .then((response) => response.json())
    .then((json) => {
        // Условие если "id" и "userId" есть в json
        if ("id" in json && "userId" in json) {
            // Пушим данные в json
            toDoList.push(json);
            // toDoList[0].id
            // Проверяем массив на массив
        } else if (Array.isArray(json)) {
            // Заменяем пустой массив на данные которые приходят
            toDoList = json;
        } else {
            console.log(`${json} - is a string`);
        }
        // Вывод в консоль
        console.log(toDoList);
    });

// Создаём Promise который будет работать со строкой <string>
const promise = new Promise<string>((resolve, reject) => {
    resolve("Test");
});

// Вывод для promise
promise.then((value) => {
    // Метод toLowerCase() на строке
    console.log(value.toLowerCase());
});

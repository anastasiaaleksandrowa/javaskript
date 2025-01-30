const en = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const ru = ["понедельник", "вторник", "среда", "четверг", "пятница", "суббота", "воскресенье"];

// Объединяем массивы в объект
const daysObject = en.reduce((acc, day, index) => {
    acc[day] = ru[index]; // Используем индекс для доступа к соответствующему значению из массива ru
    return acc;
}, {});

// Выводим полученный объект в консоль
console.log(daysObject);
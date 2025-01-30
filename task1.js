
const numbers = {
    keyin1: 1,
    keyin2: 2,
    keyin3: 3,
    keyin4: 4,
    keyin5: 5,
    keyin6: 6,
    keyin7: 7,
};

// Проходим по всем значениям объекта
for (let key in numbers) {
    if (numbers[key] >= 3) {
        console.log(numbers[key]);
    }
}
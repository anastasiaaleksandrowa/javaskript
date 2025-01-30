//Вывод в консоль массива продуктов, у которых есть хотя бы одна фотография, используя метод filter:
const products = [
    {
        id: 3,
        price: 127,
        photos: ["1.jpg", "2.jpg"],
    },
    {
        id: 5,
        price: 499,
        photos: [],
    },
    {
        id: 10,
        price: 26,
        photos: ["3.jpg"],
    },
    {
        id: 8,
        price: 78,
    },
];

// Фильтруем продукты, у которых есть хотя бы одна фотография
const productsWithPhotos = products.filter(product => product.photos && product.photos.length > 0);

// Выводим отфильтрованный массив в консоль
console.log(productsWithPhotos);

//Сортировка массива products по цене в порядке возрастания и вывод отсортированного массива в консоль:
// Сортируем массив по цене в порядке возрастания
const sortedProducts = products.sort((a, b) => (a.price || 0) - (b.price || 0));

// Выводим отсортированный массив в консоль
console.log(sortedProducts);
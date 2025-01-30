const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

// Уменьшаем цену каждого продукта на 15%
products.forEach(product => {
    product.price *= 0.85; // Умножаем цену на 0.85 (что соответствует уменьшению на 15%)
});

// Выводим обновленные цены в консоль
console.log(products);
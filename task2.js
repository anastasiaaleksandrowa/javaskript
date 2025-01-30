const post = {
    author: "John", // вывести этот текст
    postId: 23,
    comments: [
        {
            userId: 10,
            userName: "Alex",
            text: "lorem ipsum",
            rating: {
                likes: 10,
                dislikes: 2, // вывести это число
            },
        },
        {
            userId: 5, // вывести это число
            userName: "Jane",
            text: "lorem ipsum 2", // вывести этот текст
            rating: {
                likes: 3,
                dislikes: 1,
            },
        },
    ],
};

// Выводим значения в консоль
console.log(post.author); // выводим текст автора
console.log(post.comments[0].rating.dislikes); // выводим число dislikes первого комментария
console.log(post.comments[1].userId); // выводим userId второго комментария
console.log(post.comments[1].text); // выводим текст второго комментария
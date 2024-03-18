const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// Array de livros (simulando um banco de dados)
const books = [
    {
        "ID": 1,
        "title": "A Revolução dos Bichos",
        "author": "George Orwell",
        "year": 1945
    },
    {
        "ID": 2,
        "title": "Cem Anos de Solidão",
        "author": "Gabriel García Márquez",
        "year": 1967
    },
    {
        "ID": 3,
        "title": "O Alquimista",
        "author": "Paulo Coelho",
        "year": 1988
    },
    {
        "ID": 4,
        "title": "A Metamorfose",
        "author": "Franz Kafka",
        "year": 1915
    },
    {
        "ID": 5,
        "title": "A Culpa das Estrelas",
        "author": "John Green",
        "year": 2012
    },
    {
        "ID": 6,
        "title": "O Conde de Monte Cristo",
        "author": "Alexandre Dumas",
        "year": 1844
    },
    {
        "ID": 7,
        "title": "O Pequeno Príncipe",
        "author": "Antoine de Saint-Exupéry",
        "year": 1943
    },
    {
        "ID": 8,
        "title": "O Código Da Vinci",
        "author": "Dan Brown",
        "year": 2003
    },
    {
        "ID": 9,
        "title": "Dom Quixote",
        "author": "Miguel de Cervantes",
        "year": 1605
    },
    {
        "ID": 10,
        "title": "As Crônicas de Gelo e Fogo: A Guerra dos Tronos",
        "author": "George R.R. Martin",
        "year": 1996
    }
];

// Rota para renderizar a página inicial
app.get('/', (req, res) => {
    res.render('index');
});

// Rota para processar a busca
app.get('/search', (req, res) => {
    const { title, year } = req.query;

    let result = [];

    if (title) {
        result = books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
    } else if (year) {
        result = books.filter(book => book.year.toString() === year);
    }

    res.render('search', { result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

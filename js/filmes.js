let filme = JSON.parse(localStorage.getItem("filmes"))


const filmes = filme || [
    {
        nome: "O Poderoso Chefão",
        diretor: "Francis Ford Coppola",
        ano: 1972,
        genero: "Crime, Drama",
        id: 0
    },
    {
        nome: "Um Sonho de Liberdade",
        diretor: "Frank Darabont",
        ano: 1994,
        genero: "Drama",
        id: 1
    },
    {
        nome: "Pulp Fiction",
        diretor: "Quentin Tarantino",
        ano: 1994,
        genero: "Crime, Drama",
        id: 2
    },
    {
        nome: "O Senhor dos Anéis: O Retorno do Rei",
        diretor: "Peter Jackson",
        ano: 2003,
        genero: "Aventura, Fantasia",
        id: 3
    },
    {
        nome: "Forrest Gump",
        diretor: "Robert Zemeckis",
        ano: 1994,
        genero: "Drama, Romance",
        id: 4
    }
]
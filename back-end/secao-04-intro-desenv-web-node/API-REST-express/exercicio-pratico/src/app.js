const express = require('express');
const fs = require('fs').promises;

const app = express();

app.use(express.json());

app.get('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const findMovie = movies.find((movie) => movie.id === Number(id));
  return res.status(200).json(findMovie)
})

app.get('/movies/', async (req, res) => {
  const movies = await readMovies();
  return res.status(200).json(movies)
})

app.post('/movies', async (req, res) => {
  const newMovie = { ...req.body };
  const movies = await readMovies();
  const movieLen = movies.length;
  movies.push({ id: movieLen + 1, ...newMovie})

  res.status(201).json(movies);
})

app.put('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const { movie, price } = req.body;
  const movies = await readMovies();
  const findMovie = movies.find((movie) => movie.id === Number(id));
  findMovie.movie = movie || findMovie.movie;
  findMovie.price = price || findMovie.price;
  return res.status(200).json(movies)
})

app.delete('/movies/:id', async (req, res) => {
  const { id } = req.params;
  const movies = await readMovies();
  const filterMovie = movies.filter((movie) => movie.id !== Number(id));
  return res.status(200).json(filterMovie)
})

app.get('/movies/search', async (req, res) => {
  try {
    const { q } = req.query;
    const movies = await readFile();
  
if (q) {
  const filteredMovies = movies.filter((element) => element.movie.includes(q));
  return res.status(200).json(filteredMovies);
}
res.status(200).end();
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});



const readMovies = async () => {
  try {
    const response = await fs.readFile('./src/movies.json', 'utf-8');
    const data = JSON.parse(response)
    return data;
  } catch (error) {
    console.error(`Erro ao ler o arquivo: ${error.message}`);
  }
  console.log('algo')
}


module.exports = app;